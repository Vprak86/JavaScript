// function BMIcalculator(){
//     console.log("hello from BMI Calculator");
// }


const form = document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)

    let result = document.querySelector('#result');

    const ans = weight/(height*height);
    console.log(ans);

    result.innerHTML = ans;

    
})