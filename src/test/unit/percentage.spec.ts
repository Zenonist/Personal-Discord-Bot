import {percentage1, percentage2, percentage3} from '../../functions/Percentage';

describe('percentage calculation function', () => {
    describe('should return percentage of X based on Y', () => {
        it('Percentage1 TC1: should return 10.00 (10,100)', () => {
            expect(percentage1(10, 100)).toBe('10.00');
        })
        it('Percentage1 TC2: should return -6871.77 (-27,25451)', () => {
            expect(percentage1(-27, 25451)).toBe('-6871.77');
        })
        it('Percentage1 TC3: should return 3282415.47 (-12897,-25451)', () => {
            expect(percentage1(-12897, -25451)).toBe('3282415.47');
        })
        it('Percentage1 TC4: should return error (0,0)', () => {
            expect(percentage1(0, 0)).toBe('Error: x and y should not be 0');
        })
        it('Percentage1 TC5: should return -4.05 (15,-27)', () => {
            expect(percentage1(15, -27)).toBe('-4.05');
        })
    })

    describe('should return x is what percentage of Y', () => {
        it('Percentage2 TC1: should return 208.33 (25,12)', () => {
            expect(percentage2(25, 12)).toBe('208.33');
        })
        it('Percentage2 TC2: should return -0.11 (-27,25451)', () => {
            expect(percentage2(-27, 25451)).toBe('-0.11');
        })
        it('Percentage2 TC3: should return error (0,0)', () => {
            expect(percentage2(0, 0)).toBe('Error: x and y should not be 0');
        })
        it('Percentage2 TC4: should return error (25,-1)', () => {
            expect(percentage2(25, -1)).toBe('Error: y should be higher than 0');
        })
    })
    describe("X is Y percent of what?", () => {
        it('Percentage3 TC1: should return 200.00 (10,5)', () => {
            expect(percentage3(10, 5)).toBe('200.00');
        })
        it('Percentage3 TC2: should return -200.00 (10,-5)', () => {
            expect(percentage3(10, -5)).toBe('-200.00');
        })
        it('Percentage3 TC3: should return -200.00 (-10,5)', () => {
            expect(percentage3(-10, 5)).toBe('-200.00');
        })
        it('Percentage3 TC4: should return error (0,0)', () => {
            expect(percentage3(0, 0)).toBe('Error: x or y should not be 0');
        })
        it('Percentage3 TC5: should return error (0,-1)', () => {
            expect(percentage3(0, -1)).toBe('Error: x or y should not be 0');
        })
        it('Percentage3 TC6: should return error (-10,0)', () => {
            expect(percentage3(-10, 0)).toBe('Error: x or y should not be 0');
        })
    })
})