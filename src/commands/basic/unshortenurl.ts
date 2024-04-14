import axios from 'axios';
import { Command } from './../../structures/Command';
import { MessageEmbed } from 'discord.js';
import { unShortenURL } from '../../functions/UnshortenURL';
require("dotenv").config();

export default new Command({
    name: "unshortenurl",
    description: "Unshorten a URL",
    options: [
        {
            name: "url",
            description: "The URL to unshorten",
            type: "STRING",
            required: true,
        }
    ],
    run: async ({interaction}) => {
        let _url = interaction.options.getString("url");
        let unshortenedURL = await unShortenURL(_url);
        const embed_message = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("Unshortened URL results")
        .addFields(
            { name: "Original URL", value: _url },
            { name: "Unshortened URL", value: unshortenedURL }
        )
        .setTimestamp();
    await interaction.editReply({ embeds: [embed_message] });
    }
})