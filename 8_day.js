// Day & ES6 + Features

// Activity 1: Template Literals

// Task 1- Use Template literals to create a string that includes variable for a person's name ane age, and log the string to the console

const name = "Rahul";
const age = 20;

const mixStr = `Hello I'm ${name} and I'm ${age} year old`;

console.log(mixStr);

// Task 2 = Create a multi-line string using template literals and log it to  the console

const story = ` I used to watch a show called Ben 10 Classic and My Fav Alies were
- Four Arms
- Diamondhead
- Heatblast
- Cannonbolt `;

console.log(story);

//  Activity 2: Destructuring

// Task 3- Use array destructuring to extract the first and second elements from an array of numbers and log them to the console

const oldCartoons = [1, 2, 3, 4, 5, 6];

const [value1, value2] = oldCartoons;

console.log(value1);
console.log(value2);

// Task 4- Use Object destructuring to extract the title and author from a book object and log them to the console

const books = {
  Title: "Atomic Habits",
  Author: "James Clear",
  Published: "1 January 2018",
};

const { Title, Author } = books;
console.log(`Title: ${Title}`);
console.log(`Author: ${Author}`);

// Activity: 3 Spread and Rest Operators

// Task- 5 Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and  log the new array to the console

const arr = [1, 2];
const newArr = [...arr, 3, 4, 5];

console.log(newArr);

// Task 6- Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result

function add(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(`sum : ${add(1, 3, 4, 5, 5)}`);

// Activity 4: Default Parameters

// Task 7- Write a function that takes two parameters and returns their product, with the second parameters having a default value of 1. log the result of calling this function with and without the second parameter.

function multi(a, b = 1) {
  return a * b;
}

console.log(multi(2, 5));
console.log(multi(4));


// Activity 5: Enhanced object literals   

//  Task 8- Use Enhanced object literals to create an object with methods and properties, and log the object to the console

const lapModel = "Asus Tuf gaming fx15"
const relesed = 2021

const bestLap = {
  lapModel,
  relesed,

  display: function(){
     return `Laptop Model: ${this.lapModel}, Relesed:${this.relesed}`
  }
}

console.log(bestLap);
console.log(bestLap.display());


// Task 9- Create an object with computed property names based on variables and log the object to the console

let lastName = "lastname"
let fullName = {
  firstname : "Parv",
  [lastName]: "Rawal"
}

console.log(fullName);
console.log(`My full name is ${fullName.firstname + " " + fullName.lastname} `);



