interface MultiPly{
    (numA: number, numB?: number) : number;
}

let mul: MultiPly;
mul = (n1: number, n2: number = 8) => {
    return n1 * n2;
}

console.log(mul(8));

interface TergetingSite{
    targetSite: string;
}
interface HackStatus{
    status : "Hacked" | "In Progress" | "Scheduled";

}
interface Hack extends TergetingSite, HackStatus {

    hack(callBack: ()=> void) : void;
}
interface HackerInfo{
    hackerName? : string;
    hackerIP? : string;
}
class FacebookHack implements Hack, HackerInfo{
    targetSite: string;
    
    hackerName?: string;
    hackerIP?: string;

    status: "Hacked" | "In Progress" | "Scheduled";
    hack(callBack: () => void): void {
        
        this.status = "Hacked";
        console.log(this.status +" :: at "+Date());
        callBack();
    }

    constructor(n?: string, ip?: string){
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
        console.log(this.status +" :: at "+Date());
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
    if(fHack.status === "Hacked"){
        console.log("Done!");
    }
});