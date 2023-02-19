import { Command } from "../../structures/Command";
import { random1, random2, random_items } from "../../functions/Random";

export default new Command({
    name: "random",
    description: "Get a random number.",
    options: [
        {
            name: "random1",
            description: "Get a random number between 1 and X.",
            type: 1,
            options: [
                {
                    name: "x",
                    description: "The maximum number.",
                    type: "NUMBER",
                    required: true,
                }
            ],
        },
        {
            name: "random2",
            description: "Get a random number between X and Y.",
            type: 1,
            options: [
                {
                    name: "x",
                    description: "The minimum number.",
                    type: "NUMBER",
                    required: true,
                },
                {
                    name: "y",
                    description: "The maximum number.",
                    type: "NUMBER",
                    required: true,
                }
            ]
        },
        {
            name: "random_items",
            description: "Get a random item from an array. [Example: 1,2,3,4,5]",
            type: 1,
            options: [
                {
                    name: "list",
                    description: "The list of items.",
                    type: "STRING",
                    required: true,
                }
            ]

        }
],
    run: async ({interaction}) => {
        if (interaction.options.getSubcommand() === "random1") {
            const max = interaction.options.getNumber("x");
            interaction.followUp(`Result: ${random1(max)}`);
        } else if (interaction.options.getSubcommand() === "random2") {
            const min = interaction.options.getNumber("x");
            const max = interaction.options.getNumber("y");
            interaction.followUp(`Result: ${random2(min, max)}`);
        } else {
            const list = interaction.options.getString("list");
            interaction.followUp(`Result: ${random_items(list)}`);
        }
    }
})