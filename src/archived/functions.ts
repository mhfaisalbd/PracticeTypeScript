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

function MultiplyAndPrint(n1: number, n2: number, cb: (input: number)=> void) {
    const result = n1 * n2;
    cb(result);
}

MultiplyAndPrint(5, 10, ()=>{});
MultiplyAndPrint(5, 10, PrintResult);