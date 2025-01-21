const user ={
    username:"kkkkkkkkk",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welocome to this functon`)
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="aditya"
// user.welcomeMessage()

// console.log(this);

// function cahi(){
//     let username ="akhand"
    // console.log(this.username)
    // console.log(username)
// }
// cahi()

// const chai =function(){
//     let username ="akhand"
//     console.log(this.username);
// }
// chai()

// const chai =() => {
//     let username ="akhand"
//     console.log(this.username);
// }
// chai()

// const two =(num1,num2) =>{   ////explict return (alag se return lagana padh raha hai  )
//     return num1+num2
// }
// const two =(num1,num2) =>  num1+num2  //implecit return 
// const two =(num1,num2) =>  (num1+num2)  //implecit return 
// const two =(num1,num2) =>  ({username:"kushal"})  //implecit return 
 
// console.log(two(3,4));  

// const myarray=[2,3,4,5]
// myarray.forEach()