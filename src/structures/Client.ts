import { Event } from './Event';
import { CommandType } from './../Typings/Command';
import { ApplicationCommandDataResolvable, Client, Collection, ClientEvents } from "discord.js";
import glob from 'glob';
import { promisify } from 'util';
import { RegisterCommandsOptions } from '../Typings/client';
const globPromise = promisify(glob);

export class ExtendedClient extends Client {
    commands: Collection<string, CommandType> = new Collection();

    constructor() {
        super({ intents: 32767 });
    }

    start() {
        this.registerModules();
        this.login(process.env.BotToken);
    }
    async importFile(filePath: string) {
        return (await import(filePath))?.default;
    }

    async registerCommands({ commands, guildId }: RegisterCommandsOptions) {
        if (guildId) {
            this.guilds.cache.get(guildId)?.commands.set(commands);
            console.log(`Registering commands to ${guildId}`);
        } else {
            this.application?.commands.set(commands);
            console.log("Registering global commands");
        }
    }

    async deleteCommands({ guildId }: RegisterCommandsOptions) {
        if (guildId) {
            this.guilds.cache.get(guildId)?.commands.set([]);
            console.log(`Deleting commands from ${guildId}`);
        }else {
            this.application?.commands.set([]);
            console.log("Deleting global commands");
        }
    }

    async registerModules() {
        //commands
        const slashCommands: ApplicationCommandDataResolvable[] = [];
        const commandFiles = await globPromise(
            `${__dirname}/../commands/*/*{.ts,.js}`
        );
        console.log({commandFiles});
        commandFiles.forEach(async filePath => {
            const command: CommandType = await this.importFile(filePath);
            if(!command.name) return;
            console.log(command)
            this.commands.set(command.name, command);
            slashCommands.push(command);
        })

        this.on("ready", () => {
            // * Register commands to specific server
            // this.registerCommands({
            //     commands: slashCommands,
            //     guildId: process.env.GUILDID
            // });
            // this.deleteCommands({
            //     commands: slashCommands,
            //     guildId: process.env.GUILDID
            // });
            // * Register commands to every server
            this.registerCommands({
                commands: slashCommands
            });
            // this.deleteCommands({
            //     commands: slashCommands
            // });
        });
        // Event
        const eventFiles = await globPromise(
            `${__dirname}/../events/*{.ts,.js}`
        );
        console.log(__dirname);
        console.log({eventFiles});
        eventFiles.forEach(async (filePath) => {
            const event: Event<keyof ClientEvents> = await this.importFile(filePath);
            this.on(event.event, event.run)
        });
    }
}