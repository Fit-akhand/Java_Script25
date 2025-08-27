const form = document.querySelector('button')
// this usecse willgive you empty value 
// const height = parseInt(document.querySelector('#height').value); 

form.addEventListener('click',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height=== "" || height<0|| isNaN(height) ) {
        results.innerHTML=`please give a valid height ${height}`
    } else if (weight=== "" || weight<0|| isNaN(weight) ) {
        results.innerHTML=`please give a valid weight ${weight}`
    }
    else {
       const BMI = (weight/((height*height)/10000)).toFixed(2)
       // show the result 
    results.innerHTML = `${BMI}`
    // if(BMI){
    //   document.createElement('div');
    //   div.innerHTML="sdjhjahv"
    //   document.appendChild(document.querySelector('.results'))
    // }
    }
    
    
})