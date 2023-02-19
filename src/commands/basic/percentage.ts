
import { Command } from "../../structures/Command";
import { percentage1, percentage2 } from "../../functions/Percentage";

export default new Command({
    name: "percentage_calculator",
    description: "Calculates the percentage of a number.",
    options: [
        {
            name: "percentage1",
            description: "What is X % of Y?",
            type: 1,
            options: [
                {
                    name: "x",
                    description: "The number to calculate",
                    type: "NUMBER",
                    required: true,
                },
                {
                    name: "y",
                    description: "The total number",
                    type: "NUMBER",
                    required: true,
                }
            ]
        },
        {
            name: "percentage2",
            description: "X is what percentage of Y?",
            type: 1,
            options: [
                {
                    name: "x",
                    description: "The number to calculate",
                    type: "NUMBER",
                    required: true,
                },
                {
                    name: "y",
                    description: "The total number",
                    type: "NUMBER",
                    required: true,
                }
            ]
        },
        {
            name: "percentage3",
            description: "X is Y percent of what?",
            type: 1,
            options: [
                {
                    name: "x",
                    description: "The number to calculate",
                    type: "NUMBER",
                    required: true,
                },
                {
                    name: "y",
                    description: "The percentage",
                    type: "NUMBER",
                    required: true,
                }
            ]
        }
    ],
    run: async ({interaction}) => {
        if (interaction.options.getSubcommand() === "x_percentage_of_y") {
            const x = interaction.options.getNumber("x");
            const y = interaction.options.getNumber("y");
            interaction.followUp(`Result: ${percentage1(x, y)}`);
        } else {
            const x = interaction.options.getNumber("x");
            const y = interaction.options.getNumber("y");
            interaction.followUp(`Result: ${percentage2(x, y)}`);
        }
    }
})