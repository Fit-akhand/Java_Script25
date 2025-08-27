class User{
    constructor(userName){
        this.userName=userName
    }
    logMe(){
        console.log(`username : ${this.userName}`)
    }
    static createId(){
        return (`123`)
    }
}
const Akhand = new User("Akhand")
console.log(Akhand.createId())
