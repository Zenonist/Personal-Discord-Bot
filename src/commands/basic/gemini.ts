import { MessageEmbed } from "discord.js";
import { getResults } from "../../functions/Gemini";
import { Command } from "../../structures/Command";

export default new Command({
    name: "gemini",
    description: "Chat with gemini",
    options: [
        {
            name: "prompt",
            description: "The prompt to chat with Gemini",
            type: "STRING",
            required: true,
        },
        {
            name: "model",
            description: "The model to use",
            type: "STRING",
            choices: [
                {
                    name: "Gemini-Pro",
                    value: "gemini-pro"
                },
                {
                    name: "PaLM",
                    value: "text-bison-001"
                }
            ],
            required: false,
        },
        {
            name: "maxtokens",
            description: "The maximum tokens to use (Max: 4096)",
            type: "NUMBER",
            required: false,
        }
    ],
    run: async ({interaction}) => {
        const prompt = interaction.options.getString("prompt");
        const model = (interaction.options.getString("model") != null) ? interaction.options.getString("model") : "gemini-pro";
        let maxTokens = interaction.options.getNumber("maxtokens");
        if (maxTokens === null || maxTokens > 4096 || maxTokens < 1) {
            maxTokens = 4096;
        }
        const response = await getResults(
            prompt,
            model,
            maxTokens
        );
        const embed_message = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Result from Gemini")
            .setDescription(response)
            .setTimestamp();
        await interaction.editReply({ embeds: [embed_message] });
    }
})