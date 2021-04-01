function Add(inputA:number, inputB: number) /*: number*/ {
    return inputA + inputB;
}


//Valided void type where haven't requrie of return statement
function PrintResult(input:number): void {
    console.log("The result is: "+input);
}

//undefined requires at least any of return statement
function PrintResultAndReturn(input:number): undefined {
    console.log("The result is: "+input);
    return;
}

console.log(PrintResult(Add(12, 14)));