import { Command } from "../../structures/Command";
import { getResults } from "../../functions/WolframAlpha";

export default new Command({
    name: "wolframalpha",
    description: "Get result from WolframAlpha",
    type: 1,
    options: [
        {
            name: "question",
            description: "The question to ask",
            type: "STRING",
            required: true
        }
    ],

    run: async ({ interaction }) => {
        if (process.env.Disable_Wolfram === "true"){
            await interaction.followUp("This command is disabled");
            return
        }
        interaction.followUp(`Result: ${await getResults(interaction.options.getString("question"))}`);
    }
})