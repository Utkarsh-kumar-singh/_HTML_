console.log("This is tutorial for Async Programming and Browsing")

let a = true
console.log("Before")
function fn(a){
    a = false
    console.log("I broke the while loop")
}
setTimeout(fn,5000)
console.log("After")
// while (a) { 
    
// }