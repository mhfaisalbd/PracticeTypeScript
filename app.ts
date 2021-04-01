// const student: {
//     name: string;
//     regNo: number;
//     id: number;
//     isCurrent: boolean;
// }

const student = {
    name : "Hasan",
    regNo: 6530,
    id: 1602038,
    isCurrent: true,
    courses: ["CIT 111","CIT 112","PHY 111"]
}

// let myCourses: any[];  //It is possible, but breaks the features of TypeScript!!!
// myCourses = [ true, "CIT 111", student, "CIT 112","PHY 111", 1];
let myCourses: string[];
myCourses = ["CIT 111","CIT 112","PHY 111"];

console.log(student.name + ":");
for (const course of student.courses) {
    //console.log(course.map()); //Error Detected!
    console.log(course.toUpperCase());

}