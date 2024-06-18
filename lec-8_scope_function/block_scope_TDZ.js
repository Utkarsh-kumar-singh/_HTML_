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

const fun1 = function() {
    console.log("fun1 is called");
}

const ref1 = fun1;

const ref2 = ref1;

ref1();
ref2();
console.log("ref1 is ", ref1);
