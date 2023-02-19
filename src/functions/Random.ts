function random1(x: number) {
    return x > 0 ? (Math.floor(Math.random() * x) + 1) : 'Error: The number should be higher than 0';
}

function random2(x: number,y: number) {
    if (x > y) {return "Error: The first number should be lower than the second one";}
    if (x === y) {return "Error: The first number should be different than the second one";}
    return Math.floor(Math.random() * (y - x + 1)) + x;
}

function random_items(x: string) {
    if (x === null || x === '') {return "Error: input should not be null";}
    const items: string[] = x.split(/[, |]+/);
    if (items.includes('')) {return 'Error: The array should not be empty';}
    const random_index = Math.floor(Math.random() * items.length);
    return items[random_index];
}

export { random1, random2 , random_items};