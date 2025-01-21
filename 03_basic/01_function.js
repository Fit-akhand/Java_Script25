function myName() {
  console.log("A");
  console.log("K");
  console.log("H");
  console.log("A");
  console.log("N");
  console.log("D");
}

// myName()
function addTwoNumber(num1,num2){
    // console.log(num1+num2)
    let result = num1+num2;
    return result
  }

const result = addTwoNumber(2,3)
// console.log("result",result);

function loggedIn(username ="aditya"){
  if(!username){    //if(username===undefined)
    console.log("please enter a username")
    return   // for just loged in code not execute
  }
  return `${username} just logged in`
}

// console.log(loggedIn("akhand"));


function calculateCartPrice(val1,val2 ,...nub1){
  return nub1
}

// console.log(calculateCartPrice(200,300,500,2000));
const user={
  name:"akhand",
  price:"999"

}
function forUser(value){
  // console.log(`user name is ${value.name} and price is ${value.price}`)
}

// console.log(user)
forUser({
  name:"kushal",
  price:"888"
})

let array=[100,200,300,400,500]

function secondValue(getArray){
  //  return getArray[2]
  console.log(getArray[2])
}

// console.log(secondValue(array));
secondValue([900,800,700])
