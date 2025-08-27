class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Usrename is ${this.username}`)
    }
}

class teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course add by ${this.username}`)
    }
}

const chai =new teacher("Akhand","akhana@google.com","12345")

chai.addCourse()
chai.logMe()
const masalaChai = new User("Aditya")
masalaChai.logMe()
console.log(chai instanceof User)