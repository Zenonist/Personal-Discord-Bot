import { convertCelsiusToFahrenheit, convertFahrenheitToCelsius } from "../../../functions/MetricConversion/Temperature"

describe('Celsius to Fahrenheit', () => {
    it('should return 32 °F', () => {
        expect(convertCelsiusToFahrenheit(0)).toEqual(32);
    })
    it('should return -45 °F', () => {
        expect(convertCelsiusToFahrenheit(-45)).toEqual(-49);
    })
    it('should return 69.8 °F', () => {
        expect(convertCelsiusToFahrenheit(21)).toEqual(69.8);
    })
})

describe('Fahrenheit to Celsius', () => {
    it('should return 537.78 °C', () => {
        expect(convertFahrenheitToCelsius(1000)).toEqual(537.78);
    })
    it('should return 37 °C	', () => {
        expect(convertFahrenheitToCelsius(98.6)).toEqual(37);
    })
    it('should return 79.44 °C', () => {
        expect(convertFahrenheitToCelsius(175)).toEqual(79.44);
    })
})