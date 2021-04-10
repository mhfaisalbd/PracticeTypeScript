interface Hack {
    targetSite: string;
    status : "Hacked" | "In Progress" | "Scheduled";

    hack(callBack: ()=> void) : void;
}

class FacebookHack implements Hack{
    targetSite: string;
    hackerName : string;
    hackerIP : string;
    status: "Hacked" | "In Progress" | "Scheduled";
    hack(callBack: () => void): void {
        
        callBack();
    }

    constructor(n: string, ip: string){
        this.targetSite = "https://facebook.com";
        this.status = "Scheduled";
        this.hackerName = n;
        this.hackerIP = ip;
    }



}

const hack: Hack = {
    targetSite : "https://mail.google.com",
    status : "In Progress",
    hack(){
        console.log(status +" :: at "+Date());
    }
}

hack.hack(()=> {
    if(hack.status === "Hacked"){
        console.log("Done!");
    }
});

let fHack : Hack;
fHack = new FacebookHack("Gorilla", "120.103.27.110");

fHack.hack(()=>{
    if(hack.status === "Hacked"){
        console.log("Done!");
    }
})