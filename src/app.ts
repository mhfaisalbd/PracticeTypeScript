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
    private lastUser: User;
    get recentUser(){
        if(this.lastUser)
            return this.lastUser;
        else{
            throw new Error("User Undefined!");
            
        }
    }
    set recentUser(last: User){
        this.lastUser = last;
    }
    constructor(id: string, public IsGui: boolean) {
        super(id, "Ubuntu 20.04");
        let seedUser = new User('su', '1234');
        this.users = [seedUser];
        this.lastUser = seedUser;
    }
    addUser(userName: string, password: string){
        let user = new User(userName, password);
        this.users.push(user);
        this.recentUser = user;
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
ubuntu.addUser("trtizle", "trt");
ubuntu.recentUser = new User("admin", "admin");
console.log(ubuntu.recentUser);