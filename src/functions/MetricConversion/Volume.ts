export function convertLitersToGallons(Liters: number): any {
    return Liters > 0 ? Math.round((Liters * 0.264172) * 100) / 100 : 'Value should not be negative';
}

export function convertGallonsToLiters(Gallons: number): any {
    return Gallons > 0 ? Math.round((Gallons * 3.785411784) * 100) / 100 : 'Value should not be negative';
}

export function convertOuncesToLiters(Ounces: number): any {
    return Ounces > 0 ? Math.round((Ounces * 0.0295735297) * 100) / 100 : 'Value should not be negative'
}

export function convertLitersToOunces(Liters: number): any {
    return Liters > 0 ? Math.round((Liters * 33.814023) * 100) / 100 : 'Value should not be negative'
}