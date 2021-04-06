class OperatingSystem {
    /*public*/ name : string;
    private tasks : string[];
    constructor(n: string){
        this.name = n;
        this.tasks = [];
    }

    printOS(this: OperatingSystem){
        console.log(this.name);
    }
    addTask(tName: string){
        this.tasks.push(tName);
    }
    getRunningTasks(){
        console.log(this.tasks.length);
        console.log(...this.tasks);
    }

}

const windows10 = new OperatingSystem("Windows 10");
windows10.printOS();
// windows10.task[2] = "Browser"; //Error Detected!
windows10.addTask("Browser");
windows10.addTask("ConsoleApp");
windows10.getRunningTasks();

// const ubuntu = { name: "Ubuntu 20.4", printOS : windows10.printOS };
// ubuntu.printOS();