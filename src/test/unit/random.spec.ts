import {random1, random2, random_items} from '../../functions/Random';

describe('Random Function', () => {
    it('should return a number between 1 and x', () => {
        expect(random1(10)).toBeGreaterThanOrEqual(1);
        expect(random1(10)).toBeLessThanOrEqual(10);
    });

    it('should return a number between x and y', () => {
        expect(random2(10,20)).toBeGreaterThanOrEqual(10);
        expect(random2(10,20)).toBeLessThanOrEqual(20);
    });

    it('should return an error message when x is lower than 0', () => {
        expect(random1(-10)).toBe("Error: The number should be higher than 0");
    });

    it('should return an error message when x is equal to y', () => {
        expect(random2(10,10)).toBe("Error: The first number should be different than the second one");
    });

    it('should return an error message when x is higher than y', () => {
        expect(random2(20,10)).toBe("Error: The first number should be lower than the second one");
    });
    describe('random items', () => {
        it('Random items TC1: should return an error message when input is null', () => {
            expect(random_items(null)).toBe("Error: input should not be null");
        });
        it('Random items TC2: should return an error message when input is empty', () => {
            expect(random_items('')).toBe("Error: input should not be null");
        });
        it('Random items TC3: should return an error message when input doesn\'st contain data', () => {
            expect(random_items(' , , |  ')).toBe("Error: The array should not be empty");
        });
        var item_list: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
        describe('random item (,)' , () => {
            var item_list_string: string = null;
            beforeEach(() => {
                item_list_string = item_list.join(',');
            })
            it('Random items TC4: should return a random item from the array', () => {
                // console.log(random_items(item_list_string));
                expect(item_list).toContain(random_items(item_list_string));
            });
        })
        describe('random item (|)' , () => {
            var item_list_string: string = null;
            beforeEach(() => {
                item_list_string = item_list.join('|');
            })
            it('Random items TC5: should return a random item from the array', () => {
                expect(item_list).toContain(random_items(item_list_string));
            });
        })
        describe('random item ( )' , () => {
            var item_list_string: string = null;
            beforeEach(() => {
                item_list_string = item_list.join(' ');
            })
            it('Random items TC6: should return a random item from the array', () => {
                expect(item_list).toContain(random_items(item_list_string));
            });
        })
    })
})