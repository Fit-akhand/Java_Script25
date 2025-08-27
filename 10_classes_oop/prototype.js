const username="akhand     "
const chanelname="chai     "

// console.log(username.length)
// console.log(chanelname.length)

let heros = ['thor','spiderman']

let heropower={
    thor:"hammer",
    spiderman:"sling",
    
    getspiderpower:function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}

Object.prototype.akhand=function(){
    console.log(`akhand is present in all object`)
}
Array.prototype.heyAkhand=function(){
    console.log(`akhand is present in array`)
}

// heropower.akhand();
// heros.akhand()
// heros.heyAkhand()
// heropower.heyAkhand()

//// inheritance

const user={
    name:"chai",
    email:"chai@google.com",
}
const teacher={
    makeVideo:true
}
const teachingSupport={
    is_avilable:false,
}
const TAsupport={
    makingAssignment:'JS assignment',
    fulltime:true,
    __proto__:teachingSupport
}

//mordern syntex
Object.setPrototypeOf(teachingSupport,teacher)

let another_username="chaiAurCode         "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is : ${this.trim().length}`);
}
another_username.truelength()
"akhand".truelength()
"naman".truelength()