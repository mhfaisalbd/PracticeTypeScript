function Add(num1: number, num2: number) {
    // if(typeof num1 !== "number" || typeof num2 !== "number"){
    //     throw new Error("Unknown Type!");
    // }
    return num1 + num2;
}

const a = /*"12"*/ 12;
const b = 14.141;

const result = Add(a,b);

console.log(result);