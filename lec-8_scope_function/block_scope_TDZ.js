console.log("Block Scope and Temporal Dead Zone")

// let a = 10
// console.log("a 1 is :", a)
// function fn() {
//     let a = 20
//     console.log("a 2 is :", a)
//     a++
//     console.log("a 3 is :", a)
// }
// fn()
// console.log("a 4 is :", a)

// Block Scope ------- functions,loops,if-else Condition
// let a = 10
// console.log("a 1 is ",a)
// if (true){
//     let a = 20
//     console.log("a 2 is ",a)
//     let b = 30
//     console.log("b 4 is ",a)
// }
// console.log("a 3 is ", a)

// Temporal Dead Zone - Cannot access 'c' before initialization
// console.log("c 1 is ",c)
// let c = 40
// console.log("c 2 is ",c)
// console.log("c 3 is ",c)
// console.log("c 4 is ",c)

// function call

// const fun1 = function() {
//     console.log("fun1 is called");
// }

// const ref1 = fun1;

// const ref2 = ref1;

// ref1();
// ref2();
// // console.log("ref1 is ", ref1);
// const myArray = [["son",1,2,4], 45,45]
// console.log(myArray) // son
// console.log(myArray[0][1]) // son

// let myString = "Hello"
// console.log(myString) // H

// let newString = myString.replace("H", "HH")
// console.log(newString) // HHelo
// console.log(myString) // H

// Equal and Strict Equal

// function equal_1(val){
//     if (val == 1)
//         return "Equal";
//     else
//         return "Not Equal";
// }

// console.log(equal_1('1')); // Output: "Not Equal"

// function strictEqual(val){
//     if (val === 1)
//         return "Strict Equal";
//     else
//         return "Not Strict Equal";
// }
// console.log(strictEqual('1'))

// // Access the objects in JS
// const myObj = {
//     name: "John",
//     age: 30,
//     city: "New York"
//     }
// console.log(myObj.name)
// console.log(myObj["age"])

// function day_name(name){
//     let answer = ""
//     switch(name){
//         case "monday":
//             answer = "Monday is a working day";
//             break;
//             case "tuesday":
//                 answer = "Tuesday is a working day";
//                 break;
//                 case "wednesday":
//                     answer = "Wednesday is a working day";
//                     break;
//                     case "thursday":
//                         answer = "Thursday is a working day";
//                         break;
//                         case "friday":
//                             answer = "Friday is a working day";
//                             break;
//                             case "saturday":
//                                 answer = "Saturday is a weekend";
//                                 break;
//                                 case "sunday":
//                                     answer = "Sunday is a weekend";
//                                     break;
//                                     default :
//                                     answer = "Invalid day";
//                                 }
//                                 return answer
//                             }
// console.log(day_name('sunday'))


// Example: Grouping Multiple Case Labels
// function classifyCharacter(char) {
//     let category = "";
  
//     switch (char.toLowerCase()) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         category = "Vowel";
//         break;
//       case 'b':
//       case 'c':
//       case 'd':
//       case 'f':
//       case 'g':
//       case 'h':
//       case 'j':
//       case 'k':
//       case 'l':
//       case 'm':
//       case 'n':
//       case 'p':
//       case 'q':
//       case 'r':
//       case 's':
//       case 't':
//       case 'v':
//       case 'w':
//       case 'x':
//       case 'y':
//       case 'z':
//         category = "Consonant";
//         break;
//       default:
//         category = "Other";
//         break;
//     }
  
//     return category;
//   }
  
//   console.log(classifyCharacter('a')); // Expected output: "Vowel"
//   console.log(classifyCharacter('B')); // Expected output: "Consonant"
//   console.log(classifyCharacter('1')); // Expected output: "Other"
//   console.log(classifyCharacter('$')); // Expected output: "Other"
  