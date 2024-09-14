//  Day 7: Objects

// Activity 1: Object Creation and Access

// Task 1- Create an object representing a book with properties, like title, author, and year, and log the object to the console

const myFavBook = {
  Title: "Thinking Fast and Slow",
  Author: "Daniel Kahneman",
  Year: 2011,
};

console.log(myFavBook);

// Task 2- Access and log the title and author properties of the book object

console.log(`Title - ${myFavBook.Title}, Author - ${myFavBook.Author}`);

// Activity 2: Object Methods

// Task 3- Add  a method to the book object that returns a string with the books title and author, and log the result of calling this method

const oldBook = {
  Title: "Dopamine Detox",
  Author: "Thibaut Meurissee",
  Year: 2009,

  getInfo: function () {
    return `${this.Title} by ${this.Author}`;
  },
};

console.log(oldBook.getInfo());

//  Task 4 - Add a method to the book object that takes a parameter (year) and update the book's year property, the log  the updated object

oldBook.setYear = function (newyear) {
  this.year = newyear;
  // console.log(this);
  return `Year - ${newyear}`;
};

console.log(oldBook.setYear(2024));

// Activity 3: Nested Objects

// Task 5 -  Create nested object representing a liberay with properties like name and books (an array of  book objects ), and log the  liberay object to the console

const library = {
  Name: "City Library",
  books: [
    {
      Title: "Master Your Emmotions",
      Author: "Thibaut Meruissee",
    },
    {
      Title: "The 48 laws of Power",
      Author: "Robert Greene",
    },
    {
      Title: "Atomic Habits",
      Author: "James Clear",
    },
    {
      Title: "The power of your subconscious mind",
      Author: "Josseph Murphy",
    },
  ],
};

// console.log(library);

// Task 6: Access and log the name of the library and the titles of the all books in the library

console.log(`Library Name ${library.Name}`);
const { Title, books: figure } = library;
// console.log(figure);

library.books.forEach((books) => {
  console.log(`Book Title:- ${books.Title}`);
});

// Activite 4 : The this keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method

const onlineBook = {
  Title: "Dopamine Detox ",
  Author: " Thibaut Meurisse ",
  Year: 2023,

  available: function () {
    return `Available Book - ${this.Title}Publised in ${this.Year}`;
  },
};

console.log(onlineBook.available());

// Activity 5: Object iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object  and log each property and its value

const returnBookList = {
  Title: "Don't Believe Everything You Think",
  Author: "Joseph Nguyen",
  Publised: "25 November 2022",
};

for (const key in returnBookList) {
  console.log(`${key} :- ${returnBookList[key]}`);
}

// Task 9 - Use object.keys and object.values method to log all the keys and values of the book object.

library.books.forEach(books => {
  console.log(` Book:`)
  console.log(`Keys: ${Object.keys(books)}`);
  console.log(`Values: ${Object.values(books)}`)
  
})