//function imp

function calculatePrice(...num1){       // ... is known as rest operator return an array of all passed value.
    return num1;
}

function calculatePrice(val1, val2, ...num1){       // ... is known as rest operator return an array of all passed value.
    // num1 get the value after the 2nd argument
    return num1;
}
// console.log(calculatePrice(200,400,600,500,100))




//Arrow function in obj 

const user = {
    username: "prakhar",
    age: 21,
    welcomMessage: function(){
        console.log(`${this.username} welcome to Wenpage` );
    }
}
// user.welcomMessage();
// user.username = "Adi";
// user.welcomMessage();
// console.log(this);          //give empty obj

const first  = function (){
    let user = "prak";
    console.log(user);
}

const second = ()=>{
    let name = "abcd";
    console.log(this);
}
// second();

//Immediately Invoked Function Expression (IIFE)

(function one(){
    //named IIFE
    console.log("hello from IIFE");
})();

((name)=>{
    //unnamed iife
    console.log(`hello ${name}`);
})("prakhar");



