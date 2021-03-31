const btn = document.getElementById('add');
const number1 = document.getElementById('num1')! as HTMLInputElement;
const number2 = document.getElementById('num2')! as HTMLInputElement;

function Add(num1:number, num2:number) {
    return num1 + num2;
}

btn.addEventListener('click', function () {
    console.log(Add(+number1.value, +number2.value));
});