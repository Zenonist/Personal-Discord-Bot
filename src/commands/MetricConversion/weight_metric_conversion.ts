import { Command } from "../../structures/Command";
import { convertGramToOunce, convertKgToPound, convertPoundToKg } from "../../functions/MetricConversion/Weight";

export default new Command({
    name: "weight_metric_conversion",
    description: "Convert a metric to another",
    options: [
        {
            name: "kilogram_to_pound",
            description: "Convert Kilogram to Pound",
            type: 1,
            options: [
                {
                    name: "kilogram",
                    description: "The amount of kilogram that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "pound_to_kilogram",
            description: "Convert Pound to Kilogram",
            type: 1,
            options: [
                {
                    name: "pound",
                    description: "The amount of pound that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "gram_to_ounce",
            description: "Convert Gram to Ounce",
            type: 1,
            options: [
                {
                    name: "gram",
                    description: "The amount of gram that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "ounce_to_gram",
            description: "Convert Ounce to Gram",
            type: 1,
            options: [
                {
                    name: "ounce",
                    description: "The amount of ounce that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "pound_to_ounce",
            description: "Convert Pound to Ounce",
            type: 1,
            options: [
                {
                    name: "pound",
                    description: "The amount of pound that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        },
        {
            name: "ounce_to_pound",
            description: "Convert Ounce to Pound",
            type: 1,
            options: [
                {
                    name: "ounce",
                    description: "The amount of ounce that want to convert",
                    type: "NUMBER",
                    required: true
                }
            ]
        }
    ],
    run: async ({interaction}) => {
        if (interaction.options.getSubcommand() === "kilogram_to_pound") {
            const value = interaction.options.getNumber("kilogram");
            const result = convertKgToPound(value);
            await interaction.followUp(`${value} kilogram = ${result} pound`)
        } else if (interaction.options.getSubcommand() === "pound_to_kilogram") {
            const value = interaction.options.getNumber("pound");
            const result = convertPoundToKg(value);
            await interaction.followUp(`${value} pound = ${result} kilogram`)
        } else if (interaction.options.getSubcommand() === "gram_to_ounce") {
            const value = interaction.options.getNumber("gram");
            const result = convertGramToOunce(value);
            await interaction.followUp(`${value} gram = ${result} ounce`)
        } else if (interaction.options.getSubcommand() === "ounce_to_gram") {
            const value = interaction.options.getNumber("ounce");
            const result = convertPoundToKg(value);
            await interaction.followUp(`${value} ounce = ${result} gram`)
        } else if (interaction.options.getSubcommand() === "pound_to_ounce") {
            const value = interaction.options.getNumber("pound");
            const result = convertPoundToKg(value);
            await interaction.followUp(`${value} pound = ${result} ounce`)
        } else {
            const value = interaction.options.getNumber("ounce");
            const result = convertPoundToKg(value);
            await interaction.followUp(`${value} ounce = ${result} pound`)
        }
    }
})