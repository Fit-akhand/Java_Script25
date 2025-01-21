// immediately invoke function expressions(IIFE)

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);
})();   // ; lagao nahi to age ka iife function nahi chalega

console.log(`k`); //iife function chalane ke liye pale line me ; lagana padega

( (name) => {
    //unNamed iife
    console.log(`db connected two ${name}`)
})('hitesh')

// function suger(){
//     console.log(`djn`)
// }
// suger()