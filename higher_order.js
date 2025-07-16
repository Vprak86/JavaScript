//for of

const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num);
// }

//Maps :: collection of key-value pair, contain unique element, it not Iterable so for_in loop does give result 

const map = new Map();
map.set('IN',"INDIA");
map.set('USA',"United States of America")
map.set("Fr","France")
map.set("IN","INDIA")       //duplicate not added

// console.log(map);

// for (const [key, value] of map) {
//     console.log("key - ",key ," value",value);
// }


//For in
const myObj = {
    js: 'javascript',
    cpp: "C++",
    rb: "Ruby",
    py: "Python"
}

// for (const key in myObj) {
//     console.log(`key - ${key} and value -${myObj[key]}`)
// }
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//higher Order

const arr1 = [1,2,3,4,5];
// arr1.forEach(function (item){
//     console.log(item);
// });

// arr1.forEach((item,index,arr1) => {     //does not return value
//     console.log(item,index,arr1);
// });

//fliter

 const nums = [1,2,3,4,5,6,7,8,9,10]

 const res = nums.filter((num)=> num > 4);

 const res1 = nums.filter((num) =>{
    return num >4;
 })
//  console.log(res);
//  console.log(res1);

//map

 const myNums = [1,2,3,4,5,6,7,8,9,10]
 const r1 = myNums.map((num) =>{
    return num+10;
 })

//chaining also allowed arr.map().map().filter()

//  console.log(r1);

//reduce

const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);