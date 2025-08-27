//for of 

//["","",""]
//[{},{},{}]

const arr =[,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting="hello word"
for (const greet of greeting) {
    // console.log(`values of ${greet}`);
}

const map =new Map()
map.set("In","india")
map.set("USA","united states of america")
map.set("Fr","france")
map.set("In","india") //elements not repeat in map 

// console.log(map); 

for (const [key ,value] of map) {
    // console.log(`${key} :- ${value}`)
}

const myobj={
    "games":"cricket",
    "wushu":"akhand",
}

// for (const {keys,value} of myobj) {
// console.log(`${keys} - ${value}`);

// }                                      
// object not itrateblen in for of loop   
// map not itrateblen in for in loop

// const brr =[{akhand:"naman"},2,3,4,5]
// for (const num of brr) {
//     console.log(num);
// }