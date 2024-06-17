console.log("Hello Stack and Heap")

// Value type and Reference typr
// Value type: number, string, boolean, null, undefined
// Reference type: object, array, functio

// let and const difference
let x = 10;
x = 20; // allowed
console.log(x); // 20

let arr1 =[1,3,4,5,4]
let arr2 =[7,6,5,5,4]
arr1 = arr2 // allowed
console.log(arr1); // [7,6,5,5,4]

// Const

// Assignment to const is not possible
const y = 10;
// y = 20; // Error