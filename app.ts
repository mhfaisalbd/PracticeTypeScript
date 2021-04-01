function combine(
    input1: number | string, 
    input2: number | string,
    resultType: "text" | "number"
    ) {
    if(typeof input1 === 'number'&& typeof input2 === 'number' || resultType === "number")
        return +input1 + +input2;
    return input1.toString().concat( ' ', input2.toString());
}

console.log(combine(100, 130, "number"));
console.log(combine("Ariana", "Marie", "text"));

console.log(combine(100, 130, "text"));
console.log(combine("Leah", "Gotti", "number"));