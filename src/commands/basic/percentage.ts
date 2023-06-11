
import { Command } from "../../structures/Command";
import { percentage1, percentage2, percentage3 } from "../../functions/Percentage";

export default new Command({
    name: "percentage_calculator",
    description: "Calculates the percentage of a number.",
    options: [
        {
            name: "x_percentage_of_y",
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
            name: "x_is_what_percentage_of_y",
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
            name: "x_is_y_percentage_of",
            description: "X is Y percentage of what?",
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
            await interaction.followUp(`Result: ${percentage1(x, y)}%`);
        } else if (interaction.options.getSubcommand() === "x_is_what_percentage_of_y") {
            const x = interaction.options.getNumber("x");
            const y = interaction.options.getNumber("y");
            await interaction.followUp(`Result: ${percentage2(x, y)}%`);
        } else {
            const x = interaction.options.getNumber("x");
            const y = interaction.options.getNumber("y");
            await interaction.followUp(`Result: ${percentage3(x, y)}%`);
        }
    }
})