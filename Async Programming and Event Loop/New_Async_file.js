console.log("This is the new file for Async and sync Code")


console.log("Before");
setTimeout(ABC, 5000);
function ABC(a) {
    console.log("This is the ABC function");
    // return 10
}
ABC("Hello")
console.log("After");