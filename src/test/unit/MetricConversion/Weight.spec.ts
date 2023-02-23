import * as Weight from "../../../functions/MetricConversion/Weight";

describe('Kg to Lb', () => {
    it('should return -291 Lb', () => {
        expect(Weight.convertKgToPound(-132)).toBeCloseTo(-291.01,0);
    });
    it('should return 0 Lb', () => {
        expect(Weight.convertKgToPound(0)).toEqual(0);
    });
    it('should return 311619 Lb', () => {
        expect(Weight.convertKgToPound(141348)).toBeCloseTo(311619,0);
    });
});

describe('Lb to Kg', () => {
    it('should return approx -967.97 Kg', () => {
        expect(Weight.convertPoundToKg(-2134)).toBeCloseTo(-967.97,0)
    });
    it('should return 0 Kg', () => {
        expect(Weight.convertPoundToKg(0)).toEqual(0);
    });
    it('should return approx 18744.25 Kg', () => {
        expect(Weight.convertPoundToKg(41324)).toBeCloseTo(18744.25,0);
    });
});

describe('G to Oz', () => {
    it('should return -124.27 Oz', () => {
        expect(Weight.convertGramToOunce(-3523)).toBeCloseTo(-124.27,0)
    });
    it('should return 0 Oz', () => {
        expect(Weight.convertGramToOunce(0)).toEqual(0);
    });
    it('should return 759.20 Oz', () => {
        expect(Weight.convertGramToOunce(21523)).toBeCloseTo(759.20,0);
    });
});

describe('Oz to G', () => {
    it('should return -34,983.31 G', () => {
        expect(Weight.convertOunceToGram(-1234)).toBeCloseTo(-34983.31,0)
    });
    it('should return 0 Oz', () => {
        expect(Weight.convertOunceToGram(0)).toEqual(0);
    });
    it('should return 61,008.17 Oz', () => {
        expect(Weight.convertOunceToGram(2152)).toBeCloseTo(61008.17,0);
    });
});

describe('Lb to Oz', () => {
    it('should return -34,983.31 G', () => {
        expect(Weight.convertPoundToOunce(-414)).toBeCloseTo(-6624,0)
    });
    it('should return 0 Oz', () => {
        expect(Weight.convertPoundToOunce(0)).toEqual(0);
    });
    it('should return 61,008.17 Oz', () => {
        expect(Weight.convertPoundToOunce(54235)).toBeCloseTo(867760,0);
    });
});

describe('Oz to Lb', () => {
    it('should return -34,983.31 G', () => {
        expect(Weight.convertOunceToPound(-423)).toBeCloseTo(-26.44,0)
    });
    it('should return 0 Oz', () => {
        expect(Weight.convertOunceToPound(0)).toEqual(0);
    });
    it('should return 61,008.17 Oz', () => {
        expect(Weight.convertOunceToPound(512)).toBeCloseTo(32,0);
    });
});