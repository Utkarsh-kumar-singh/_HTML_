console.log("JS-2")

/**
 * Arrays in JS
 * Methods in array
*/

// Array
let arr = [1,2,3,4,5]
console.log(arr)

// Loop in array
for (let i = 0; i < arr.length; i++)
    {console.log(i, arr[i]);}

// Methods in array
/**
 * Add last = push
 * Remove last = pop
 * Add first = unshift
 * Remove first = shift
*/

arr.push(50,70,60,90)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(5)
console.log(arr);

// Slice and Splice Methods

let org_arr = [1,2,3,4,5,6,6,7,89,99]
console.log("original Array", org_arr)

// Slice 
let slice_arr = org_arr.slice(1,6)
console.log("Slice", slice_arr)
console.log("original Array", org_arr)


// splice --- Remove from original array also
let splice_arr = org_arr.splice(2,3)
console.log("Splice", splice_arr)
console.log("original Array", org_arr)

// Joins
let join_arr = org_arr.join(";")
console.log(join_arr)
console.log("original Array", org_arr)




























