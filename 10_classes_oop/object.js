function multiplyby5(num){
    return num*5
}

multiplyby5.power=2

console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype)

function creatUser(username,score){
    this.username=username
    this.score=score
}

creatUser.prototype.increment=function(){
    this.score
}

creatUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}
const chai= new creatUser('chai',25)
const tea=creatUser('tea',250)

chai.printMe()