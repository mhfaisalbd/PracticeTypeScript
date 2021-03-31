function Add(num1: number, num2: number, checked: boolean, phrase: string) {
    // if(typeof num1 !== "number" || typeof num2 !== "number"){
    //     throw new Error("Unknown Type!");
    // }
    let result = num1 + num2;
    if(checked){
        console.log(phrase + result);
    }
    else{
        return result;
    }
}

const a = /*"12"*/ 12;
const b = 14.141;
const checkedType = !(typeof a !== "number" || typeof b !== "number");

Add(a, b, checkedType, "Result is: ");