import { MessageEmbed } from "discord.js";
import { getResults } from "../../functions/ChatGPT";
import { Command } from "../../structures/Command";

export default new Command({
    name: "chatgpt",
    description: "Chat with GPT",
    options: [
        {
            name: "prompt",
            description: "The prompt to chat with GPT",
            type: "STRING",
            required: true,
        },
        {
            name: "model",
            description: "The model to use",
            type: "STRING",
            choices: [
                {
                    name: "ChatGPT 3.5",
                    value: "gpt-3.5-turbo"
                },
                {
                    name: "ChatGPT 4",
                    value: "gpt-4"
                }
            ],
            required: false,
        },
        {
            name: "max_tokens",
            description: "The maximum tokens to use",
            type: "NUMBER",
            required: false,
        },
        {
            name: "temperature",
            description: "The temperature to use",
            type: "NUMBER",
            required: false,
        },
        {
            name: "top_p",
            description: "The top p to use",
            type: "NUMBER",
            required: false,
        }
    ],
    run: async ({interaction}) => {
        if (process.env.Disable_Chatgpt === "true"){
            await interaction.followUp("This command is disabled");
            return
        }
        const prompt = interaction.options.getString("prompt")
        const model = (interaction.options.getString("model") != null) ? interaction.options.getString("model") : "gpt-3.5-turbo"
        const max_tokens = (interaction.options.getNumber("max_tokens") != null) ? interaction.options.getNumber("max_tokens") : 256
        const temperature = (interaction.options.getNumber("temperature") != null) ? interaction.options.getNumber("temperature") : 1
        const top_p = (interaction.options.getNumber("top_p") != null) ? interaction.options.getNumber("top_p") : 1
        const response = await getResults(
            prompt,
            model,
            max_tokens,
            temperature,
            top_p
        );
        const embed_message = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("Result from ChatGPT")
            .setDescription(response)
            .setTimestamp()
        await interaction.editReply({embeds: [embed_message]})
    }
})