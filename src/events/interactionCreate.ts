import { CommandInteractionOptionResolver } from 'discord.js';
import { ExtendedInteraction } from '../Typings/Command';
import { client } from './../index';
import { Event } from './../structures/Event';

export default new Event('interactionCreate', async (interaction) => {
    // Chat Input Commands
    if(interaction.isCommand()){
        await interaction.deferReply();
        const command = client.commands.get(interaction.commandName);
        if (!command) return interaction.followUp("This command is not existed");

        command.run({
            args: interaction.options as CommandInteractionOptionResolver,
            client,
            interaction: interaction as ExtendedInteraction
        });
    }
});