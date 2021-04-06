class OperatingSystem {
    
    protected tasks : string[];
    constructor(private readonly id: string, public name: string){
        this.tasks = [];
    }

    printOS(this: OperatingSystem){
        //this.id  = "1128"; //Error Detected!
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

class Windows extends OperatingSystem{
    
    constructor(id: string, public version: string) {
        super(id, `Windows ${version}`);
        
    }
    addTask(tName: string){
        if(this.tasks.find((tn)=> tn === tName) === undefined)
        this.tasks.push(tName);
    }

}

class User  {
    
    constructor(public userName: string, private password: string) {
        
        
    }
}

class Linux extends OperatingSystem{
    
    private users: User[];
    constructor(id: string, public IsGui: boolean) {
        super(id, "Ubuntu 20.04");
        this.users = [new User('su', '1234')];
    }
    addUser(userName: string, password: string){
        this.users.push(new User(userName, password));
    }

    listUser(){
        console.log(this.users.length);
        console.log(...this.users);
    }
}

const windows10 = new Windows( "w10", "10 Enterprise");
windows10.printOS();
// windows10.task[2] = "Browser"; //Error Detected!
windows10.addTask("Browser");
windows10.addTask("ConsoleApp");
windows10.addTask("Browser");
windows10.getRunningTasks();
console.log(windows10);

const ubuntu = new Linux("u20", true);
ubuntu.listUser();
console.log(ubuntu);