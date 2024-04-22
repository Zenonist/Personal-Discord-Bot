import { Command } from "../../structures/Command";
import getVirustotalResult from "../../functions/Virustotal";
import { unShortenURL } from "../../functions/UnshortenURL";
import { virustotalFuncResponse } from "../../structures/functions/virustotalStructure";
import { MessageEmbed } from "discord.js";

export default new Command({
    name: "scan_shortened_url",
    description: "Scan a shortened URL using virustotal",
    type: 1,
    options: [
        {
            name: "url",
            description: "The shortened URL to scan",
            type: "STRING",
            required: true
        }
    ],
    run: async ({ interaction }) => {
        // Get the original URL
        let url = await unShortenURL(interaction.options.getString("url"));
        // Check if the URL is error
        if (url.includes("Error")){
            await interaction.followUp(url);
        }else {
            // Get the analysis result from virustotal
            let result: virustotalFuncResponse = await getVirustotalResult(url);
            if (!result.error){
                const embed_message = new MessageEmbed()
                .setColor("#0099ff")
                .setTitle("VirusTotal results")
                .addFields(
                    { name: "URL", value: url },
                    { name: "malicious", value: result.malicious.toString() },
                    { name: "suspicious", value: result.suspicious.toString() },
                    { name: "undetected", value: result.undetected.toString() },
                    { name: "harmless", value: result.harmless.toString() },
                    { name: "timeout", value: result.timeout.toString() }
                )
                .setTimestamp();
                
                await interaction.followUp({ embeds: [embed_message] });
            }else {
                await interaction.followUp("Error");
            }
        }
    }
})