// const coding =['akhand','aditya','kushal','lakshya','surya']

// const values = coding.forEach(item => {
//     console.log(item)
//     return item // nothing return 
// });
// console.log(`123`);
// console.log(values);

const myNumber=[1,2,3,4,5,6,7,8,9,10]

const number = myNumber.filter( (num)=>{
   return num > 4
})
// const number = myNumber.filter( (num)=> num > 4)

// console.log(number)

const newnum=[]
myNumber.forEach(number => {
    if(number>5){
        newnum.push(number)
    }
});
// console.log(newnum)

const book =[
    { title:'book one' ,genre:'fiction',publish:1990,edition:1995},
    { title:'book two' ,genre:'non-fiction',publish:1990,edition:1994},
    { title:'book three' ,genre:'history',publish:1995,edition:2008},
    { title:'book four' ,genre:'science',publish:1993,edition:1999},
    { title:'book five' ,genre:'science',publish:2000,edition:2005},
    { title:'book seven' ,genre:'fiction',publish:1999,edition:2004},
    { title:'book eight' ,genre:'history',publish:1993,edition:2004},
    { title:'book nine' ,genre:'non-fiction',publish:2003,edition:2016},
]

//  let userBook=book.filter((bk)=> bk.genre==='history')

userBook=book.filter((bk)=>{
    return bk.genre==='fiction'&& bk.publish<=2000
})

 console.log(userBook)