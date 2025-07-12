//array

// const myArr = [1,2,3,4,"prakhar",'a',true];
const myArr= new Array(1,2,3,4,5,6);
//resizable, mix of datatype, array of array, array-copy-operations create shallow copy.

// console.log(myArr,arr2);

//push -> add at last
//pop ->remove last element
//unshift -> add ele at first index //arr.unshift(9);
//shift -> remove ele from first position   //arr.shift();

// .join() => convert array into a string

//slice vs splice

//arr.slice(a,b)  => give a subarray from index a to b-1 don't change in original array;
const arr1 = myArr.slice(1,3);
// console.log("original Array after slice :",myArr);
// console.log("slice array: ",arr1);

//arr.splice(a,b)  =>give a subarray from index a to b and remove these element from original array {original array have ele index 0 to a-1 and b+1 to last index}.
const arr2 = myArr.splice(1,3);
// console.log("original Array after Splice: ",myArr);
// console.log("splice array",arr2);

//concat() vs spread[...arr1,...arr2];
//in cancat() you can add only one array with another but in spread[...] you ad concatinate multiple array.
const marvel = ["Iron man", "Thor","Black Panther"];

const dc = ["Batman", "Superman","Aquaman"];

const all = [...marvel,...dc];
console.log(all);

//flat(depth);    //convert multidimensionnal array into 1D array;
//use flat(Infinity) when depth is unknown; give a copy 


//Array.isArray(given_value) is used to check the wheathe given value is array or not.


//Array.from(give_value) or Array.of(five_value)  is convert the give_value into an array;  //behave different with different type of value(json etc)