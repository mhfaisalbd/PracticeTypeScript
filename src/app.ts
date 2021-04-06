class OperatingSystem {
    name : string;

    constructor(n: string){
        this.name = n;
    }

    printOS(this: OperatingSystem){
        console.log(this.name);
    }
}

const windows10 = new OperatingSystem("Windows 10");
windows10.printOS();

const ubuntu = { name: "Ubuntu 20.4", printOS : windows10.printOS };
ubuntu.printOS();