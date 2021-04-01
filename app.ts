function combine(input1: number | string, input2: number | string) {
    if(typeof input1 === 'number'&& typeof input2 === 'number')
        return input1 + input2;
    return input1.toString().concat( ' ', input2.toString());
}

console.log(combine(100, 130));
console.log(combine("Ariana", "Marie"));