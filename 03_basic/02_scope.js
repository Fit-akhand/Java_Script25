if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    username ="akhand"
    function two(){
        const website="yputube"
        console.log(username);
    }
    // console.log(website) // show error because it is define inside two
    two()
}
// one()

if (true) {
    const username ="akhand";
    if (true) {
        const website="the repair crew"
        // console.log(username+website)
    }
    // console.log(website);
    
}
// console.log(username );

// +++++++++++++++++++++++++++++++++intrestin+++++++++++++++++++++++++++

function addone(num){
    return num+1
}

addone(5)


// addtwo(6) // give error

const addtwo=function(num){
    return num+2
}
addtwo(2)