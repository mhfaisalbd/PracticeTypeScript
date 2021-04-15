type Admin = {
    name: string;
    role: string[];
}

type User = {
    name: string;
    startingDate: Date;
}

type AppUser = User | Admin;

const user1: AppUser = {
    name: "Abu Saleh",
    role: ['sysadmin'],
    startingDate: new Date()
}

function printInfo(user:AppUser) {
    console.log('Name: '+ user.name);
    if('role' in user)
        console.log('Role: '+ user.role);
    if('startingDate' in user)
        console.log('Name: '+ user.startingDate);

}

printInfo(user1);
printInfo({name: "Ahamd Alp", startingDate: new Date()});

// type Custom1 = string | number;
// type Custom2 = number | boolean;

// type OwnCustom = Custom1 & Custom2;


class ButtonPhone {
    phoneCall(dailNumber: number){
        console.log('Dailing...\n to'+ dailNumber);
    }
}

class SmartPhone {
    phoneCall(dailNumber: number){
        console.log('Dailing...\n to'+ dailNumber);
    }
    videoCall(userName: string){
        console.log('Dailing...\n to'+ userName);
    }
    
}

type Phone = ButtonPhone | SmartPhone;

const myPhone1 = new ButtonPhone();
const myPhone2 = new SmartPhone();

function usePhone(phone:Phone) {
    phone.phoneCall(1234);
    if(phone instanceof SmartPhone)   {
        phone.videoCall('ALTAP');
    } 
}

usePhone(myPhone1);
usePhone(myPhone2);