import { Command } from "../../structures/Command";
import { Client }from "genius-lyrics";
import { MessageEmbed } from "discord.js";

const client = new Client(process.env.GENIUS_API_KEY);

export default new Command({
    name: "lyrics",
    description: "Get the lyrics of a song",
    type: 1,
    options: [
        {
            name: "song",
            description: "The song to get the lyrics",
            type: "STRING",
            required: true,
        },
        {
            name: "artist",
            description: "The artist of the song",
            type: "STRING",
            required: true,
        }
    ],
    run: async ({interaction}) => {
        const song = interaction.options.getString("song");
        const artist = interaction.options.getString("artist");
        const songs_list = await client.songs.search(`${artist} ${song}`);
        if (songs_list) {
            const lyrics = songs_list[0].lyrics();
            const embed_msg = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle(`Lyrics of ${song} by ${artist}`)
                .setDescription(await lyrics)
                .setTimestamp()
            await interaction.editReply({embeds: [embed_msg]});
        } else {
            await interaction.followUp("No lyrics found");
        }
    }
})