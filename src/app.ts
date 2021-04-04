{
    var myVar = "1952";
    const myConst = "2312";
    // myConst = "1234"; //Error Detected!
    let myLet = "3211";
    myLet = "1122";
}
console.log(myVar); // Accessable in outer/global scope.
// console.log(myConst); // Not Accessable in outer scope!
// console.log(myLet); // // Not Accessable in outer scope!

const add = (a:number, b:number) => a + b;

const printOut : (data: number | string) => void = input => console.log(input);

let btn = document.querySelector('button');

btn?.addEventListener('click', event => console.log(event));

printOut(add(12,24));