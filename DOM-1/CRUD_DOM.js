console.log("Hello Dom :")
// Document only knows the HTML tag so suppose we 
// Want to work with p tag

/**
 * Children of Documents (HTML) are Head and Body
*/

// const html = document.children[0];
// const body = html.children[1];
// console.log("inner children :", body.innerHTML);

// Second Way is queryselector() --- Choose always first matching element...
// const body = document.querySelector("body")
// console.log(body.innerHTML)

// const ptag = document.querySelector("p")
// console.log("Inside my Paragraph :->" , ptag.textContent)

// For all Paragraph tags use always querySelectorAll()..
// const panother = document.querySelectorAll("p")
// const a1 = panother[0]
// console.log("All Paragraphs :->" , a1.textContent)

// using Class and Id
const class_id = document.querySelector(".First");
console.log("Class :->", class_id.textContent);
const id = document.querySelector("#Second");
console.log("Id :->", id.textContent);

// Update Contents using [.textContent]--------
id.textContent = "I was a JS program";
class_id.textContent = "I was Update also"

// Styling--
id.style.color = "red";
id.style.fontSize = "30px";
id.style.backgroundColor = "black"

// Similar for class-id---
class_id.style.color =  "red"
class_id.style.fontSize = "30px";
class_id.style.backgroundColor = "black"

// Rempve Specific Element
// class_id.remove()


// Create Element
const liElem = document.createElement("li");
// Add task in this list
liElem.innerText = "I am a new List Item";
// select  their parent..
const ul = document.querySelector(".list");
// Append to that
ul.appendChild(liElem)

// For multiple ids so we can go with qyerySelectorAll() and choose the indexing.










