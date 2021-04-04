let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Leah";

if(typeof userInput === 'string') userName = userInput;

function GenerateError(message:string, code: number) /*: never*/ {
    throw {message: message, errorCode: code};
    //while(true){};
}

let result = GenerateError("WTF!!!", 404 );
console.log(result);
