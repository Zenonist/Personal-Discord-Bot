import { Command } from "../../../structures/Command";
import { convertGramToOunce, convertKgToPound, convertPoundToKg } from "../../../functions/MetricConversion/Weight";

export default new Command({
    name: "weight_metric_conversion",
    description: "Convert a metric to another",
    options: [
        {
            name: "Kilogram_to_Pound",
            description: "Convert Kilogram to Pound",
            type: 1,
            options: [
                {
                    name: "Kilogram",
                    description: "The amount of kilogram that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "Pound_to_Kilogram",
            description: "Convert Pound to Kilogram",
            type: 1,
            options: [
                {
                    name: "Pound",
                    description: "The amount of pound that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "Gram_to_Ounce",
            description: "Convert Gram to Ounce",
            type: 1,
            options: [
                {
                    name: "Gram",
                    description: "The amount of gram that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "Ounce_to_Gram",
            description: "Convert Ounce to Gram",
            type: 1,
            options: [
                {
                    name: "Ounce",
                    description: "The amount of ounce that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "Pound_to_Ounce",
            description: "Convert Pound to Ounce",
            type: 1,
            options: [
                {
                    name: "Pound",
                    description: "The amount of pound that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "Ounce_to_Pound",
            description: "Convert Ounce to Pound",
            type: 1,
            options: [
                {
                    name: "Ounce",
                    description: "The amount of ounce that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        }
    ],
    run: async ({interaction}) => {
        if (interaction.options.getSubcommand() === "Kilogram_to_Pound") {
            const value = interaction.options.getNumber("Kilogram");
            const result = convertKgToPound(value);
            await interaction.followUp(`${value} kilogram = ${result} pound`)
        } else if (interaction.options.getSubcommand() === "Pound_to_Kilogram") {
            const value = interaction.options.getNumber("Pound");
            const result = convertPoundToKg(value);
            await interaction.followUp(`${value} pound = ${result} kilogram`)
        } else if (interaction.options.getSubcommand() === "Gram_to_Ounce") {
            const value = interaction.options.getNumber("Gram");
            const result = convertGramToOunce(value);
            await interaction.followUp(`${value} gram = ${result} ounce`)
        } else if (interaction.options.getSubcommand() === "Ounce_to_Gran") {
            const value = interaction.options.getNumber("Ounce");
            const result = convertPoundToKg(value);
            await interaction.followUp(`${value} ounce = ${result} gram`)
        } else if (interaction.options.getSubcommand() === "Pound_to_Ounce") {
            const value = interaction.options.getNumber("Pound");
            const result = convertPoundToKg(value);
            await interaction.followUp(`${value} pound = ${result} ounce`)
        } else {
            const value = interaction.options.getNumber("Ounce");
            const result = convertPoundToKg(value);
            await interaction.followUp(`${value} ounce = ${result} pound`)
        }
    }
})