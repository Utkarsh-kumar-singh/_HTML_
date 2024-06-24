// Non-Premitive - Objects, Arrays, Functions

// let obj = {}
// obj.First_name = "Utkarsh Kumar"
// obj.last_name = "Singh"
// obj.age = 29

// console.log(obj)

/**
 * Objects - Key : value
 * Key - String or Value
 * Value - Anything --- We can call this Properties
 * Inside objects if we have a one function so we can call as Methods.....
*/

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genres: ["Fiction", "Classic", "Literature"],
    summary: function() {
      return `${this.title} is a novel by ${this.author}, published in ${this.yearPublished}.`;
    }
  };
  
  // Example usage
  console.log(book.summary());
  