console.log("This is the file for types of functions");

// Function Statements
// function greet(name) {
//     console.log("I am the fun", name)
//     return 10
// }

// const rVal = greet("Hello")
// console.log(rVal)

// // Function Expression -- Basically We store the address of the function into variable.
// const Fexp = function (){
//     console.log("I am the function expression")
// }
// Fexp()

// // Arrow Functions - Consice way to write the code.
const AF = (name) => {
    console.log("I am the arrow function", name);
}
AF("Hello");


// Immediately invoke function expression
(function() {
    console.log("I am the immediately invoke function expression");
}) ()

