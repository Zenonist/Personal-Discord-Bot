export function convertCelsiusToFahrenheit(Celsius: number): number {
    return Math.round((Celsius * 1.8 + 32) * 100) / 100;
}

export function convertFahrenheitToCelsius(Fahrenheit: number): number {
    return Math.round((((Fahrenheit - 32) * 5 ) / 9) * 100) / 100;
}