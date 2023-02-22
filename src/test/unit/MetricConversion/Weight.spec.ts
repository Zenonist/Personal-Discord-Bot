import * as Weight from "../../../functions/MetricConversion/Weight";

describe('Kg to Lb', () => {
    it('should return -291 Lb', () => {
        expect(Weight.convertKgToPound(-132)).toEqual(-291.01);
    });
    it('should return 0 Lb', () => {
        expect(Weight.convertKgToPound(0)).toEqual(0);
    });
    it('should return 311619 Lb', () => {
        expect(Weight.convertKgToPound(141348)).toEqual(311619);
    });
});