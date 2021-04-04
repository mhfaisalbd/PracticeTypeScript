function Add(inputA:number, inputB: number) {
    return inputA + inputB;
}

function PrintResult(input:number): void {
    console.log("The result is: "+input);
}

let combine: (a:number, b:number) => number;
combine = Add;
// combine = PrintResult;
// combine = 5;

console.log(PrintResult(combine(12, 14)));