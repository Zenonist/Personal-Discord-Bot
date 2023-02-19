function percentage1(x:number,y:number) {
    if (x === 0 && y === 0) {return "Error: x and y should not be 0"}
    return ((x * y) / 100).toFixed(2);
}

function percentage2(x:number,y:number) {
    if (y < 0) {return "Error: y should be higher than 0";}
    if (x === 0 && y === 0 ) {return "Error: x and y should not be 0";}
    return ((x / y) * 100).toFixed(2);
}

function percentage3(x:number,y:number) {
    if (x === 0 || y === 0) {return "Error: x or y should not be 0";}
    return (x/(y/100)).toFixed(2);
}

export { percentage1, percentage2, percentage3 };