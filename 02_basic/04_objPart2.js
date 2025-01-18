// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="akhand"
tinderUser.email="akhandrajsingh@googl.com"

// console.log(tinderUser);

const regularUser ={
    email:"ak@google.com",
    name:{
        firstName:"akhand",
        last:{
            lastName:"raj singh",
        }
    }
}
// console.log(regularUser.name.firstName); // step by step object ok tirget karna nahi to value undefined aayegi
// console.log(regularUser.name.last.lastName)

const newuser2={4:"a",5:"b",6:"c"}
const newuser1={0:"a",2:"b",3:"c"}
const newuser3={1:"a",8:"b",9:"c"}

// const newuser4 = {newuser1,newuser2,newuser3} // in this object present inside object
// const newuser4 = Object.assign({},newuser2,newuser3,newuser1,newuser3) 
const newuser4={...newuser1,...newuser2,...newuser3} 
// console.log(newuser4)
// it align seriyal wise
// '0': 'a',
// '1': 'a',
// '2': 'b',
// '3': 'c',
// '4': 'a',
// '5': 'b',
// '6': 'c',
// '8': 'b',
// '9': 'c'

const user=[
    {
        id:"1",
        email:"akhand@google.com",
    },
    {
        id:"1",
        email:"akhand@google.com",
    },
    {
        id:"1",
        email:"akhand@google.com",
    }

]
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // change all entres in array[[a],[b],[c]]
console.log(tinderUser.hasOwnProperty("email"));
console.log(tinderUser.hasOwnProperty("id"));

