export function convertKgToPound(Kg: number): number {
    return Math.round((Kg / 0.45359237) * 100) / 100;
}

export function convertPoundToKg(Lb: number): number {
    return Math.round((Lb / 2.2046) * 100) / 100;
}

export function convertGramToOunce(G: number): number {
    return Math.round((G * 0.035274) * 100) / 100;
}

export function convertOunceToGram(Oz: number): number {
    return Math.round((Oz / 0.035274) * 100) / 100;
}

export function convertPoundToOunce(Lb: number): number {
    return Math.round((Lb * 16) * 100) / 100;
}

export function convertOunceToPound(Oz: number): number {
    return Math.round((Oz * 0.062500) * 100) / 100;
}