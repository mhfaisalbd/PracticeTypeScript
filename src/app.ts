class OperatingSystem {
    
    private tasks : string[];
    constructor(private id: string, public name: string){
        this.tasks = [];
    }

    printOS(this: OperatingSystem){
        console.log(`${this.id}: ${this.name}`);
    }
    addTask(tName: string){
        this.tasks.push(tName);
    }
    getRunningTasks(){
        console.log(this.tasks.length);
        console.log(...this.tasks);
    }

}

const windows10 = new OperatingSystem( "w10", "Windows 10");
windows10.printOS();
// windows10.task[2] = "Browser"; //Error Detected!
windows10.addTask("Browser");
windows10.addTask("ConsoleApp");
windows10.getRunningTasks();

// const ubuntu = { name: "Ubuntu 20.4", printOS : windows10.printOS };
// ubuntu.printOS();