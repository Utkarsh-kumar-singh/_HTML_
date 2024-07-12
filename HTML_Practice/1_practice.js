// // <!-- Functions -->

// // <!-- Functon Statement -->
//  const fs = function(a,b){
//     console.log("This is a function statement");
//     return a+b;
//  }
//  const fn_1 = fs(2,2);
//  console.log(fn_1);

// // Function Expression----------
// const fs_1 = function(a,b){
//     console.log("This is a function expression");
//     return a+b;
// }
// const fn_2 = fs_1(2,6);
// console.log(fn_2);

// // Arrow Function
// const fs_2 = (a,b) => {
//     console.log("This is a arrow function");
//     return a+b;
// }
// const fn_3 = fs_2(2,6);
// console.log(fn_3);

// // IIFE
// const HaBi = (function(a,b){
//     console.log("This is a IIFE");
//     return a+b;
// })
// const fn_4 = HaBi(2,6);
// console.log("This is a IIFE", fn_4);

// const html = document.children[0];
// const body = html.children[1];
// console.log("inner html ", body.innerHTML)

// Use this 
const body = document.querySelector("body")
console.log(body)

const body1 = document.querySelector("#unique")
console.log(body1)

const idptag = document.querySelector("#unique")
console.log(idptag.textContent)

// Upadate this 
const idptag1 = document.querySelector("#unique")
idptag1.textContent = "This is a new text content"
console.log(idptag1.textContent)

// For Deletion
// const idptag2 = document.querySelector("#unique")
// idptag2.remove()
// console.log(idptag2.textContent)

// For Create

const liElement = document.createElement("li")

// Add Task

liElement.textContent = "I am a Task"

const ul = document.querySelector(".list")

// Append Child
ul.appendChild(liElement)