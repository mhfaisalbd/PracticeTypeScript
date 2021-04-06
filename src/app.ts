class OperatingSystem {
    name : string;

    constructor(n: string){
        this.name = n;
    }
}

const windows10 = new OperatingSystem("Windows 10");
console.log(windows10);