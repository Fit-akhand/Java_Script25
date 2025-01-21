//if

const temperature = 41
if (temperature<50  ) {
    // console.log(`less then 50`); 
}
else{
// console.log(`greater then 50`);
}

// console.log(`executed`);

// <,>,>=,<=,==,!=,===,!==

let score=200
if (score<400) {
    const power="fly"
    // console.log(`user power:${power}`)
}
// console.log(`user power:${power}`)

const balance =1000
// if (balance>500) console.log(`test`) //implicit scope
// if (balance>500) console.log(`test`),console.log(`test2`); //not a good practice

// if (balance<500) {
//     console.log("less than 500");
// }
// else if (balance<750){
//     console.log("less than 750");
// }
// else if (balance<100){
//     console.log("less than 1000");
// }
// else{
//     console.log("less than 1200");
    
// }

const userLogin =true
const debitCard =true
const loginfromgoogle =true
const loginfromemail =false
if (userLogin&&debitCard&&2==2) {
    console.log("you can buy course");
}

if (loginfromemail||loginfromgoogle) {
    console.log("user can loged in ")
}