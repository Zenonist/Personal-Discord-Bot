import { Command } from "../../structures/Command";
import { Guild, MessageEmbed } from "discord.js";

export default new Command({
    name: "server-info",
    description: "Get information about the server.",
    run: async ({interaction}) => {
        // ! we don't need defer since we automatically defer the message [Based on InteractionCreate.ts]
        const guild_data: Guild = interaction.guild;
        const embed_msg = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle(guild_data.name)
            // .setAuthor(client.user.username,client.user.avatarURL())
            .addFields(
                {name : 'Server ID', value : String(guild_data.id), inline : true},
                {name : 'Created at', value : String(guild_data.createdAt)},
                {name : 'Amount of member', value : String(guild_data.memberCount), inline : true},
                // {name : 'Owner' , value: `${owner_id.username}#${owner_id.discriminator}`, inline : true},
                // {name : 'You joined this server at', value : String(guild_data.joinedAt), inline : true},
                {name : 'Number of booster', value : String(guild_data.premiumSubscriptionCount), inline : true},
                {name : 'verified', value : String(guild_data.verified), inline : true},
            )
            .setTimestamp()
            // .setFooter(`Requested by ${interaction.user.username}#${interaction.user.discriminator}`,interaction.user.avatarURL());
        console.log(embed_msg);
        await interaction.editReply({embeds: [embed_msg]});
    }
})