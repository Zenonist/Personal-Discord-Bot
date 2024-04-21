import { Command } from "../../structures/Command";
import getVirustotalResult from "../../functions/Virustotal";
import { virustotalFuncResponse } from "../../structures/functions/virustotalStructure";
import { MessageEmbed } from "discord.js";

export default new Command({
    name: "virustotal",
    description: "Scan URL with VirusTotal",
    options: [
        {
            name: "url",
            description: "The URL to scan",
            type: "STRING",
            required: true,
        }
    ],
    run: async ({interaction}) => {
        let _url = interaction.options.getString("url");
        let result: virustotalFuncResponse = await getVirustotalResult(_url);
        console.log(result.error)
        console.log(result.malicious)
        if (!result.error){
            const embed_message = new MessageEmbed()
            .setColor("#0099ff")
            .setTitle("VirusTotal results")
            .addFields(
                { name: "URL", value: _url },
                { name: "malicious", value: result.malicious.toString() },
                { name: "suspicious", value: result.suspicious.toString() },
                { name: "undetected", value: result.undetected.toString() },
                { name: "harmless", value: result.harmless.toString() },
                { name: "timeout", value: result.timeout.toString() }
            )
            .setTimestamp();
            
            await interaction.editReply({ embeds: [embed_message] });
        }else{
            await interaction.editReply("Error");
        }
    }
})