const myarr= [0,1,2,3,4,5,6];

// console.log(myarr[3])

const myarr2 = new Array(1,2,3,4,5,6,7)
// console.log(myarr2);
myarr2.push(8);
myarr2.push(9);
myarr2.pop()
// console.log(myarr2);

myarr.unshift(9)
// console.log(myarr)
myarr.shift();
// console.log(myarr)


// const newarr = myarr.join()
// console.log(myarr)
// console.log(newarr)

let mn1=myarr.slice(1,3);
// console.log(mn1)
// console.log(myarr);

let mn2=myarr.splice(1,3);
// console.log(mn2)
// console.log(myarr)