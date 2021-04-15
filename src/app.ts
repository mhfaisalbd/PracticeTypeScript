type Admin = {
    name: string;
    role: string[];
}

type User = {
    name: string;
    startingDate: Date;
}

type AppUser = User & Admin;

const user1: AppUser = {
    name: "Abu Saleh",
    role: ['sysadmin'],
    startingDate: new Date()
}

type Custom1 = string | number;
type Custom2 = number | boolean;

type OwnCustom = Custom1 & Custom2;