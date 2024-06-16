// Question

for (let num = 1; num <= 20; num++) {  // Correct the loop variable and condition
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("Number is FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Number is Buzz");
    } else if (num % 5 === 0) {
        console.log("Number is Fizz");
    } else {
        console.log(num);  // Optional: Print the number itself if none of the conditions match
    }
}
