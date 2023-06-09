import { convertLitersToGallons, convertGallonsToLiters , convertOuncesToLiters, convertLitersToOunces} from '../../../functions/MetricConversion/Volume'

// test cases for liters to gallons conversion
describe('Convert Liters to Gallons', () => {
    it('should return 0.26', () => {
        expect(convertLitersToGallons(1)).toEqual(0.26);
    })

    it('should return 193.11', () => {
        expect(convertLitersToGallons(731)).toEqual(193.11);
    })

    it('should be error message', () => {
        expect(convertLitersToGallons(-10)).toBe('Value should not be negative');
    })
})

// test cases for gallons to liters conversion
describe('Convert Gallons to Liters', () => {
    it('should return 3.79', () => {
        expect(convertGallonsToLiters(1)).toEqual(3.79);
    })

    it('should return 16,334.05', () => {
        expect(convertGallonsToLiters(4315)).toEqual(16334.05)
    })

    it('should return error message', () => {
        expect(convertGallonsToLiters(-10)).toBe('Value should not be negative');
    })
})

// test cases for ounces to liters conversion
describe('Convert Ounces to Liters', () => {
    it('should return 0.03', () => {
        expect(convertOuncesToLiters(1)).toEqual(0.03);
    })

    it('should return 0.71', () => {
        expect(convertOuncesToLiters(24)).toEqual(0.71);
    })

    it('should return error message', () => {
        expect(convertOuncesToLiters(-1)).toBe('Value should not be negative');
    })
})

//test cases for liters to ounces conversion
describe('Convert Liters to Ounces', () => {
    it('should return 33.81', () => {
        expect(convertLitersToOunces(1)).toEqual(33.81);
    })

    it('should return 145907.51', () => {
        expect(convertLitersToOunces(4315)).toEqual(145907.51);
    })

    it('should return error message', () => {
        expect(convertLitersToOunces(-124)).toBe('Value should not be negative')
    })
})