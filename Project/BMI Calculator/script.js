// function BMIcalculator(){
//     console.log("hello from BMI Calculator");
// }


const form = document.querySelector("form")

const div = document.getElementById("result");

  if (!div.textContent.trim()) {
    div.style.display = "none";
  }

form.addEventListener('submit',function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)

    let result = document.querySelector('#result');
    div.style.display = "";

    if(weight ==='' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else if(height ==='' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }
    else{
        const ans = (weight/((height*height)/10000)).toFixed(2);
        console.log(ans);

        result.innerHTML = ans;
        if(ans < 18.6){
            
            result.innerHTML = `${ans} <br> Underweight`;
        }
        else if(ans >= 18.6 && ans <= 24.6){
            
            result.innerHTML = `${ans} <br> Normal`;
        }else{
            
            result.innerHTML = `${ans} <br> Overweight`;
        }
    }
    
    

    
    
})