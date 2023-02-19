import { Command } from "../../structures/Command"; 
import { MessageEmbed, User } from "discord.js";

export default new Command({
    name: "user-info",
    description: "Get information about the user.",
    options: [{
        name: "user",
        type: "USER",
        required: true,
        description: "The user to get information about."
    }],
    run: async ({interaction}) => {
        const user_data: User = interaction.options.getUser("user");
        const embed_msg: MessageEmbed = new MessageEmbed()
            .setColor("#0099ff") // Blue
            .setTitle(`${user_data.username}#${user_data.discriminator}`)
            .setThumbnail(user_data.avatarURL())
            .addFields(
                {name : 'User ID', value : String(user_data.id), inline : true},
                {name : 'Created at', value : String(user_data.createdAt)},
                {name : 'Avatar', value : String(user_data.avatarURL()), inline : true},
                {name : 'Bot', value : String(user_data.bot), inline : true},
            )
            .setTimestamp()
        await interaction.editReply({embeds: [embed_msg]});
    }
})