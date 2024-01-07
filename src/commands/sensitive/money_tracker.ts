import { Command } from "../../structures/Command";
import { Client as NotionClient } from "@notionhq/client";
import { NotionSection } from "../../functions/Notion";

export default new Command({
    name: "money-tracker",
    description: "Track income and expense",
    options: [
        {
            name: "type",
            description: "The type of transaction",
            type: 3,
            required: true,
            choices: [
                {
                    name: "Income",
                    value: "Income"
                },
                {
                    name: "Expense",
                    value: "Expense"
                }
            ]
        },
        {
            name: "categories",
            description: "categories",
            type: 3,
            required: true,
        },
        {
            name: "amount",
            description: "The amount of money",
            type: 10,
            required: true,
        },
        {
            name: "currency",
            description: "The currency",
            type: 3,
            required: true,
            choices: [
                {
                    name: "USD",
                    value: "USD"
                },
                {
                    name: "GBP",
                    value: "GBP"
                },
                {
                    name: "THB",
                    value: "THB"
                },
                {
                    name: "EUR",
                    value: "EUR"
                },
                {
                    name: "JPY",
                    value: "JPY"
                },
                {
                    name: "CNY",
                    value: "CNY"
                },
            ]
        },
        {
            name: "note",
            description: "The note",
            type: 3,
            required: false,
        }
    ],
    run: async ({interaction}) => {
        if (interaction.user.id !== process.env.USERID) {
            await interaction.reply("You do not have permission to execute commands.");
        } else {
            // * Get the data from the interaction
            const type: string = interaction.options.getString("type");
            const categories: string = interaction.options.getString("categories");
            const amount: number = interaction.options.getNumber("amount");
            const currency: string = interaction.options.getString("currency");
            let note: string = interaction.options.getString("note");
            // * If the note is null, set it to an empty string
            if (note === null) { note = "";} 
            // * Check if the amount is greater than 0
            if (amount <= 0) return await interaction.editReply("Amount must be greater than 0.");
            // * Convert category to an array for multi-select section
            const notionSection: NotionSection = new NotionSection();
            const categoriesArray = notionSection.createMultiSelect(categories);
            // * Create the Notion Client
            const notion = new NotionClient({ auth: process.env.NOTION_API_KEY });
            try {
                // * Create the page
                await notion.pages.create({
                    parent: {
                        database_id: process.env.NOTION_MONEY_TRACKER_DB_ID
                    },
                    properties: {
                        Type: {
                            select: {
                                name: type
                            }
                        },
                        Categories: categoriesArray,
                        Amount: {
                            number: amount
                        },
                        Currency: {
                            select: {
                                name: currency
                            }
                        },
                        Note: {
                            rich_text: [
                                {
                                    text: {
                                        content: note
                                    }
                                }
                            ]
                        }
                    }
                })
                await interaction.editReply(`Added ${amount} ${currency} to the database.`);
            } catch (error) {
                console.log(error);
                await interaction.editReply(`Error: ${error}}`);
            }
        }
    }
})