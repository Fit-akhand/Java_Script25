const myNumber=[1,2,3,4,5,6,7,8,9,10]

// const newNumber= myNumber.map((num)=> num+10)
const newNumber=myNumber
.map((num)=>num*10)
.map((num)=>num+2)
.filter((num)=> num>50)        //[ 52, 62, 72, 82, 92, 102 ]
// .map((num)=> num<95)       // output [ true, true, true, true, true, false ]
console.log(newNumber)