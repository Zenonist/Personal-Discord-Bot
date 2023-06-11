export function convertKgToPound(Kg: number): any {
    return Kg >= 0 ? Math.round((Kg / 0.45359237) * 100) / 100 : 'Value should not be negative';
}

export function convertPoundToKg(Lb: number): any {
    return Lb >= 0 ? Math.round((Lb / 2.2046) * 100) / 100 : 'Value should not be negative';
}

export function convertGramToOunce(G: number): any {
    return G >= 0 ? Math.round((G * 0.035274) * 100) / 100 : 'Value should not be negative';
}

export function convertOunceToGram(Oz: number): any {
    return Oz >= 0 ? Math.round((Oz / 0.035274) * 100) / 100 : 'Value should not be negative';
}

export function convertPoundToOunce(Lb: number): any {
    return Lb >= 0 ? Math.round((Lb * 16) * 100) / 100 : 'Value should not be negative';
}

export function convertOunceToPound(Oz: number): any {
    return Oz >= 0 ? Math.round((Oz * 0.062500) * 100) / 100 : 'Value should not be negative';
}