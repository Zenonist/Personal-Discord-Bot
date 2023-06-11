import * as Weight from "../../../functions/MetricConversion/Weight";

describe('Kg to Lb', () => {
    it('should return error message', () => {
        expect(Weight.convertKgToPound(-132)).toBe('Value should not be negative');
    });
    it('should return 0 Lb', () => {
        expect(Weight.convertKgToPound(0)).toEqual(0);
    });
    it('should return 311619 Lb', () => {
        expect(Weight.convertKgToPound(141348)).toBeCloseTo(311619,0);
    });
});

describe('Lb to Kg', () => {
    it('should return error message', () => {
        expect(Weight.convertPoundToKg(-2134)).toBe('Value should not be negative');
    });
    it('should return 0 Kg', () => {
        expect(Weight.convertPoundToKg(0)).toEqual(0);
    });
    it('should return approx 18744.25 Kg', () => {
        expect(Weight.convertPoundToKg(41324)).toBeCloseTo(18744.25,0);
    });
});

describe('G to Oz', () => {
    it('should return error message', () => {
        expect(Weight.convertGramToOunce(-3523)).toBe('Value should not be negative');
    });
    it('should return 0 Oz', () => {
        expect(Weight.convertGramToOunce(0)).toEqual(0);
    });
    it('should return 759.20 Oz', () => {
        expect(Weight.convertGramToOunce(21523)).toBeCloseTo(759.20,0);
    });
});

describe('Oz to G', () => {
    it('should return error message', () => {
        expect(Weight.convertOunceToGram(-1234)).toBe('Value should not be negative');
    });
    it('should return 0 Oz', () => {
        expect(Weight.convertOunceToGram(0)).toEqual(0);
    });
    it('should return 61,008.17 Oz', () => {
        expect(Weight.convertOunceToGram(2152)).toBeCloseTo(61008.17,0);
    });
});

describe('Lb to Oz', () => {
    it('should return error message', () => {
        expect(Weight.convertPoundToOunce(-414)).toBe('Value should not be negative');
    });
    it('should return 0 Oz', () => {
        expect(Weight.convertPoundToOunce(0)).toEqual(0);
    });
    it('should return 61,008.17 Oz', () => {
        expect(Weight.convertPoundToOunce(54235)).toBeCloseTo(867760,0);
    });
});

describe('Oz to Lb', () => {
    it('should return error message', () => {
        expect(Weight.convertOunceToPound(-423)).toBe('Value should not be negative');
    });
    it('should return 0 Oz', () => {
        expect(Weight.convertOunceToPound(0)).toEqual(0);
    });
    it('should return 61,008.17 Oz', () => {
        expect(Weight.convertOunceToPound(512)).toBeCloseTo(32,0);
    });
});