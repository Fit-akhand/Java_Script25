const user ={
    username:"akhand raj singh",
    logedinCount:8, 
    signIn:true,

    getuserDetail:function(){
        // console.log("get user detail from data base");
        // console.log(`user name ${this.username}`);
        // console.log(this);
    }
}


// console.log(user.username)
// console.log(user.getuserDetail())
// console.log(this);

function User(username,logincount,islogedin){
    this.username =username;
    this.logedinCount=this.logedinCount;
    this.islogedin-islogedin;

    return this
}

const userone =new User("maja a aya",10,false)
const usertwo =new User("akhand",12,true)
console.log(userone);
console.log(usertwo);
