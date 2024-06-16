
/**
 * Var Declaration
 * How JS run the code
 * What type of values it can have
    * Premitive - Number, String, Boolean, Null, Undefined
        * Advance --> bigInt, Symbols
    * Non-Premitive - Function, Arrays, Object
 * Conditionals and Switch cases
 * Loops
*/
console.log("Inside Intro")
// Variable Declration
let varName;
varName = 10;
console.log("4", varName);
varName = 10.5;
console.log("5", varName);
// String type
let newvar;
newvar = "i am String"
console.log("11", newvar)
// null-undefind
let nullvar;
nullvar=null
console.log(nullvar)
// Type of a Var
let typevar = 10;
let typevar1 = 10;
console.log(typeof typevar)
console.log(typeof typevar1)

// Conditionals
let age = 18;
if (age % 2 == 0) {
    console.log("I am Even");
}
else{
    console.log("I am odd")
}

// Nested Condition
age = 18;
if (age > 18) {
    console.log("I am eligible to vote");
}
else if (age == 18) {
    console.log("I am eligible to vote but just");
}
else{
    console.log("Not Eligilbe")
}

// Switch Statement 
let day = 3; // You can change this value to test different days

let message;

switch (day) {
    case 0:
        message = "Sunday - Relax, it's the weekend!";
        break;
    case 1:
        message = "Monday - Start of the work week!";
        break;
    case 2:
        message = "Tuesday - Keep going!";
        break;
    case 3:
        message = "Wednesday - Midweek already!";
        break;
    case 4:
        message = "Thursday - Almost there!";
        break;
    case 5:
        message = "Friday - Last day of the work week!";
        break;
    case 6:
        message = "Saturday - Enjoy your weekend!";
        break;
    default:
        message = "Invalid input. Please enter a number between 0 and 6.";
}

console.log(message);

// Loops
for (let num = 1; num <= 10; num++) {
    console.log(num); // This should work correctly and print numbers from 1 to 10
}