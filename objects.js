//object 
//if object created by constructor then singleton type object created
//Object.create
// const User = new Object()

//object literals

const mysym =  Symbol("key1");
const mysym2 = Symbol("key2");

const user = {
    name: "Aman",   //name is treated as string
    age: 21,
    day: ['monday','tuesday'],
    "full name": "AMAN Verma",      //it can't be acces using . operator
    mysym: "MY Key",                //it use as the string datatype
    [mysym2]: "My Key 1",           //it used as symbol
}
//access  in general using dot(.) operator but in some cases using ["key"]
// console.log(user.day);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(user.mysym);   //undefined if use  ->user[mysym]

// console.log(user[mysym2]);
// Object.freeze(user) //freeze the object no change occur after freeze

//we can create nested object and can access using dot(.) chain

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'a',4:'b'}
const obj3 = {5:'a',6:'b'}

// const obj4 = {obj1,obj2,obj3}
// const obj4  = Object.assign({},obj1,obj2,obj3)  // it assign all object in first param and return it
const obj4 = {...obj1,...obj2,...obj3}  // In general and mostly used
// console.log(obj4);


// console.log(Object.keys(obj1));     //give an array of keys
// console.log(Object.values(obj1));   //give an array of values
// console.log(Object.entries(obj1));  //give 2D array with key value 


//destructuring

const course = {
    cousername: "JAvascript",
    price: 999,
    courseInstructor : "Prakhar"
}
// course.courseInstructor
const {courseInstructor: instructor} = course       //can be use alias name
console.log(instructor)
