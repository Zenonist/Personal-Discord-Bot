import { Command } from "../../structures/Command";

export default new Command({
    name: "ping",
    description: "Ping the bot.",
    type: 1,
    options: [{
        name: "stats",
        type: "STRING",
        required: true,
        description: "The stats to get."
    }],
    run: async ({interaction}) => {
        interaction.followUp(interaction.options.getString("stats"));
    }
})