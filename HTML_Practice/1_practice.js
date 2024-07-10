// <!-- Functions -->

// <!-- Functon Statement -->
 const fs = function(a,b){
    console.log("This is a function statement");
    return a+b;
 }
 const fn_1 = fs(2,2);
 console.log(fn_1);

// Function Expression----------
const fs_1 = function(a,b){
    console.log("This is a function expression");
    return a+b;
}
const fn_2 = fs_1(2,6);
console.log(fn_2);

// Arrow Function
const fs_2 = (a,b) => {
    console.log("This is a arrow function");
    return a+b;
}
const fn_3 = fs_2(2,6);
console.log(fn_3);

// IIFE
const HaBi = (function(a,b){
    console.log("This is a IIFE");
    return a+b;
})
const fn_4 = HaBi(2,6);
console.log("This is a IIFE", fn_4);
