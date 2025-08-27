// generate rendom color 
const rendomColor= function(){
    const hex ='0123456789ABCDEF'
    let color ='#'
    for(let i=0;i<6;i++){
        color = color + hex[Math.floor(Math.random()*16)]
    }
    console.log(color)
    return color;
};
let interValId;
const startChangingColor = function(){
    if(!interValId){
        interValId = setInterval(() => {
            document.body.style.backgroundColor=rendomColor();
            
        }, 1000);
    }
    
    };
    
const stopChangingColor = function(){
    clearInterval(interValId);
    interValId =null;
};

document.querySelector("#start").addEventListener('click',startChangingColor);

document.querySelector("#stop").addEventListener('click',stopChangingColor);
