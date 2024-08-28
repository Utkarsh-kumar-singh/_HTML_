// fs ----- You can do anything in file and folers using this `fs`........

const { error } = require('console');
const fs = require('fs');


let fileName = "test.txt";
let content = "I am adding this file for someone with Async Code";

// Sync Functions-----------
// console.log("Before Printing")

// fs.writeFileSync(fileName, content)

// console.log("After Printing")

// Async Funcions--------------------------------------------------------

// console.log("Before");

// fs.writeFile(fileName, content, function(err, data) {
//     if (err) { // Corrected the syntax by replacing `if {` with `if (`
//         console.log("Something went wrong");
//     } else {
//         console.log("Written successfully");
//     }
// });

// console.log("After");

// File Read
// const readContebt = fs.readFileSync(fileName)
// console.log(content)

// fs.readFile(fileName, 'utf8', function(err, data) {
//     if (err) {
//         console.log("Something went wrong while reading the file");
//     } else {
//         console.log("File content:");
//         console.log(data); // Logs the content of the file
//     }
// });

// console.log("After reading the file...");

// Appending
// fs.appendFileSync(fileName, " This is appended content");













