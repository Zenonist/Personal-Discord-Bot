import {NotionSection, createMultiSelectFormat, multiselect_type, dateConverter} from "../../functions/Notion";

// Create class
var notion: NotionSection = new NotionSection;

describe('notion title section', () => {
    it('should return git in correct format', () => {
        expect(notion.createTitle('Git')).toStrictEqual(
            {
                "type": "text",
                "text": {
                    "content": "Git"
                }
            }
        )
    })
    it('should return /*-+ in correct format',() => {
        expect(notion.createTitle('/*-+')).toStrictEqual(
            {
                "type": "text",
                "text": {
                    "content": "/*-+"
                }
            }
        ) 
    })
    it('should return 173 in correct format',() => {
        expect(notion.createTitle('173')).toStrictEqual(
            {
                "type": "text",
                "text": {
                    "content": "173"
                }
            }
        ) 
    })
    it('should return สวัสดี in correct format',() => {
        expect(notion.createTitle('สวัสดี')).toStrictEqual(
            {
                "type": "text",
                "text": {
                    "content": "สวัสดี"
                }
            }
        ) 
    })
    it('should return 1 in correct format [Number]',() => {
        // @ts-expect-error
        expect(notion.createTitle(1)).toStrictEqual(
            {
                "type": "text",
                "text": {
                    "content": "1"
                }
            }
        ) 
    })
})

describe('notion text section', () => {
    it('should return git in correct format', () => {
        expect(notion.createText('Git')).toStrictEqual(
            {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": 'Git'
                        }
                    }
                ]
            }
        )
    })
    it('should return /*-+ in correct format',() => {
        expect(notion.createText('/*-+')).toStrictEqual(
            {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": '/*-+'
                        }
                    }
                ]
            }
        ) 
    })
    it('should return 173 in correct format',() => {
        expect(notion.createText('173')).toStrictEqual(
            {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": '173'
                        }
                    }
                ]
            }
        ) 
    })
    it('should return สวัสดี in correct format',() => {
        expect(notion.createText('สวัสดี')).toStrictEqual(
            {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": 'สวัสดี'
                        }
                    }
                ]
            }
        ) 
    })
    it('should return 1 in correct format [Number]',() => {
        // @ts-expect-error
        expect(notion.createText(1)).toStrictEqual(
            {
                "rich_text": [
                    {
                        "type": "text",
                        "text": {
                            "content": '1'
                        }
                    }
                ]
            }
        ) 
    })
})

describe('notion number section', () => {
    it('should return 555 in correct format', () => {
        expect(notion.createNumber('555')).toStrictEqual(
            {
                "number": 555
            }
        )
    })
    it('should return error [String]', () => {
        expect(notion.createNumber('Git')).toBe("Invalid Input: Not a number")
    })
})

describe('notion select section', () => {
    it('should return git in correct format', () => {
        expect(notion.createSelect('Git')).toStrictEqual(
            {
                "select": {
                    "name": "Git"
                }
            }
        )
    })
    it('should return /*-+ in correct format',() => {
        expect(notion.createSelect('/*-+')).toStrictEqual(
            {
                "select": {
                    "name": "/*-+"
                }
            }
        ) 
    })
    it('should return 173 in correct format',() => {
        expect(notion.createSelect('173')).toStrictEqual(
            {
                "select": {
                    "name": "173"
                }
            }
        ) 
    })
    it('should return สวัสดี in correct format',() => {
        expect(notion.createSelect('สวัสดี')).toStrictEqual(
            {
                "select": {
                    "name": "สวัสดี"
                }
            }
        ) 
    })
    it('should return 1 in correct format [Number]',() => {
        // @ts-expect-error
        expect(notion.createSelect(1)).toStrictEqual(
            {
                "select": {
                    "name": "1"
                }
            }
        ) 
    })
})

describe('notion multiselect section', () => {
    it('should return list of 1,2,3 in correct format', () => {
        expect(notion.createMultiSelect('1,2,3')).toStrictEqual(
            {
                "multi_select": [
                    {
                        "name": "1"
                    },
                    {
                        "name": "2"
                    },
                    {
                        "name": "3"
                    }
                ]
            }
        )
    })
    it('should return list of 1 2 3 in correct format', () => {
        expect(notion.createMultiSelect('1 2 3')).toStrictEqual(
            {
                "multi_select": [
                    {
                        "name": "1"
                    },
                    {
                        "name": "2"
                    },
                    {
                        "name": "3"
                    }
                ]
            }
        )
    })
    it('should return list of 1|2|3 in correct format', () => {
        expect(notion.createMultiSelect('1|2|3')).toStrictEqual(
            {
                "multi_select": [
                    {
                        "name": "1"
                    },
                    {
                        "name": "2"
                    },
                    {
                        "name": "3"
                    }
                ]
            }
        )
    })
    it('should return list of 1,2 3|4 in correct format', () => {
        expect(notion.createMultiSelect('1,2 3|4')).toStrictEqual(
            {
                "multi_select": [
                    {
                        "name": "1"
                    },
                    {
                        "name": "2"
                    },
                    {
                        "name": "3"
                    },
                    {
                        "name": "4"
                    }
                ]
            }
        )
    })
    it('should return only 1 value', () => {
        expect(notion.createMultiSelect('151345')).toStrictEqual(
            {
                "multi_select": [
                    {
                        "name": "151345"
                    }
                ]
            }
        )
    })
})

// ! Could use date section due to the bug
// describe('notion date section', () => {
//     it('should return 12/5/2022 date in correct format', () => {
//         const temp_date: string = new Date(2022,4,12).toISOString();
//         expect(notion.createDate('test',false,'test')).toBe("Invalid Input: Not a date")
//     })

//     it('test', () => {
//         const temp_date: string = new Date(2022,4,12).toISOString();
//         expect(dateConverter('12/5/2022')).toBe(temp_date);
//     })
// })

describe('notion checkbox section', () => {
    it('should return true in correct format', () => {
        expect(notion.createCheckbox("True")).toStrictEqual(
            {
                "checkbox": true
            }
        )
    })
    it('should return false in correct format', () => {
        expect(notion.createCheckbox("False")).toStrictEqual(
            {
                "checkbox": false
            }
        )
    })
    it('should return error', () => {
        expect(notion.createCheckbox("TEST")).toBe('Invalid Input: Not a boolean')
    })
})

describe('notion URL section', () => {
    // TODO: Add test case for input that is not URL
    it('should return url in correct format', () => {
        expect(notion.createURL('https://www.google.com')).toStrictEqual(
            {
                "url": "https://www.google.com"
            }
        )
    })
})