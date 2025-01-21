// const userEmail ="akhand@ai"
// if (userEmail) {
//     console.log("got user email");
// }
// else{
//     console.log(`not got user email`);
// }


// const usercode =[]
// if (usercode) {
//     console.log("got user code");
// }
// else{
//     console.log(`not got user code`);
// }


//FALSY VALUES
// false , 0 , -0 , BigInt 0n ,"" , null , undefined , NaN

//TRUTY VALUES
// true , 1 , "0" ,'false'," ",[],{},function(){}

const array =[]
if (array.length==0) {
    console.log("array is empty")
}

const obj={}
if (Object.keys(obj).length==0) {
    console.log("object is empty")
}

// Nullish coalescign operator(??) null ,undefined
let val1
// val1 =5 ?? 10
// val1 =null ?? 10
val1 =undefined ?? 10

console.log(val1);

// Ternary operator

//condition true ?? false 
const iceteaprice=100;
iceteaprice>=80 ? console.log("greater then 80"): console.log("less then 80");
