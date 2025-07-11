//primitive
//String, Number, Boolean, null, undefined, Symbol(Used to check the Uniqueness mostly used in react), BigInt

const score = 100;
const spends = 121.34;  //type number;
let isLoggedIn = false;     //boolean
let temp = null;        //type object;

let email;          //type undefined

const id  = Symbol('123')
const anotherId = Symbol('123');
//asign unique value even vallue is same;return value is not same

console.log(id===anotherId);

//non-primitive(reference)
//Array, Objects, Functions

const Name = ['Aditya', 'Mohan', 'Suresh','Nanak'];
const myObj = {
    name:"Ram",
    age: 22,
}
const myFun = function(){
    console.log("hello from function");
}

console.table([typeof(Name),typeof(myObj),typeof(myFun)]);
