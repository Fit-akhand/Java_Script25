const coding =['akhand','aditya','kushal','lakshya','surya']

coding.forEach( function(name) {
    // console.log(name)
});

coding.forEach((name) => {
    // console.log(name)
});

function printme(item){
    console.log(item)
}

// coding.forEach(printme)

coding.forEach((name , index ,arr) => {
    // console.log(name,index,arr)
});

const mycoding =[
    {
        language:"javascript",
        languagekey:"js"
    },
    {
        language:"java",
        languagekey:"java"
    },
    {
        language:"python",
        languagekey:"py"
    }
]
mycoding.forEach(item => {
    // console.log(item)
});
mycoding.forEach( (item)=> {
    // console.log(item.language)
});