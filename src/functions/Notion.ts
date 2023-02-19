class NotionSection {
    createTitle (input: string) {
        if (typeof input !== "string") {input = String(input)}
        return {
            "type": "text",
            "text": {
                "content": input
            }
        }
    }
    createText (input: string) {
        if (typeof input !== "string") {input = String(input)}
        return {
            "rich_text": [
                {
                    "type": "text",
                    "text": {
                        "content": input
                    }
                }
            ]
        }
    }
    createNumber (input: string) {
        if (!/^\d+$/.test(input)) {return "Invalid Input: Not a number"}
        return {
            "number": Number(input)
        }
    }
    createSelect (input: string) {
        if (typeof input !== "string") {input = String(input)}
        return {
            "select": {
                "name": input
            }
        }
    }
    createMultiSelect (input: string) {
        return {
            "multi_select": createMultiSelectFormat(input)
        }
    }
    // ! Could not be used due to the bug
    // createDate (input: string, end_choice: boolean, end_date: string) {
    //     if (dateConverter(input) === "Invalid Input: Not a date" || dateConverter(end_date) === "Invalid Input: Not a date") {return "Invalid Input: Not a date"}
    //     if (end_choice === false) { return {
    //             "date": {
    //                 "start": dateConverter(input)
    //             }
    //         }
    //     }
    //     return {
    //         "date": {
    //             "start": dateConverter(input),
    //             "end": dateConverter(end_date)
    //         }
    //     }
    // }
    createCheckbox (input: string) {
        if (input.toLowerCase() !== "true" && input.toLowerCase() !== "false") { return "Invalid Input: Not a boolean"}
        if (input.toLowerCase() === "true") { return {
            "checkbox": true
        }}
        return {
            "checkbox": false
        }
    }
    createURL (input: string) {
        // TODO: Create regex to check input is a URL or not
        return {
            "url": input
        }
    }
}

type multiselect_type = {
    name: string
}

function createMultiSelectFormat(options: string): multiselect_type[] {
    const items: string[] = options.toLowerCase().split(/[, |]+/);
    var result: Array<multiselect_type> = [];
    items.forEach(function (value) {
        result.push({
            "name": value
        })
    })
    return result;
}

function dateConverter(date: string): string {
    const date_split = date.split("/");
    date_split.forEach(function(i) {
        // console.log(i)
        if (/^\d+$/.test(i)) { console.log('A'); return "Invalid Input: Not a date";}
    })
    return new Date(Number(date_split[2]), Number(date_split[1]) - 1, Number(date_split[0])).toISOString();
}

export {NotionSection, dateConverter, createMultiSelectFormat, multiselect_type}