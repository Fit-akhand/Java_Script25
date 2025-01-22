const myNums =[1,2,3,4,5,6,7,8,9,10]

const myTotal=myNums.reduce(function (acc , carrvalue){
    // console.log(`acc${acc} currentValue ${carrvalue}`)
    return acc+ carrvalue 
},5)
// const myTotal=myNums.reduce((acc,currentValue)=> (acc+currentValue),5)

// console.log(`hey`,myTotal)

const shopingCart=[
    {
        itemname:"js course",
        price:2999,
    },
    {
        itemname:"py course",
        price:999,
    },
    {
        itemname:"mobile dev course",
        price:5999,
    },
    {
         itemname:"data science",
         price:2999,
    }
]
// const totalCoursePrice = shopingCart.reduce((acc,price)=>(acc + price.price),0)
// console.log(totalCoursePrice);