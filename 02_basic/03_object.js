//object can be define two types :-
// 1)litrals
// 2)constrector
//singleton
//object.create

//object letrals
const mysym =Symbol("key1");
const jsUser={
    name:"akhand",
    "full name":"akhand raj singh",
    [mysym]: "mykey1",
    age:18,
    location:"noida",
    email:"akhandrajsingh@googel.com",
    islogedin:"true",
    lastlogindays:["monday","saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mysym])
// jsUser.email = "akhand@google.com";
// Object.freeze(jsUser)
// jsUser.email = "akhand@gmail.com.com";
// console.log(jsUser)

jsUser.greating =function(){
    console.log("hello js user")
}
jsUser.greatingTwo =function(){
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greating())
console.log(jsUser.greatingTwo())