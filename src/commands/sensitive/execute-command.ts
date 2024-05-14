import { Command } from "../../structures/Command";
// This function uses to execute js command
export default new Command({
    name: "execute-command",
    description: "Execute a command.",
    options: [{
        name: "command",
        type: "STRING",
        required: true,
        description: "The command to execute."
    }],
    run: async ({interaction}) => {
        if (interaction.user.id !== process.env.UserID) await interaction.followUp("You do not have permission to execute commands.");
        const cmd: string = interaction.options.getString("command");
        try {
            await interaction.editReply(`Executing command ${cmd}\nResult: ${eval(cmd)}`);
        } catch (e) {
            await interaction.editReply(`Error: ${e.message}`);
        }
        
    }
})