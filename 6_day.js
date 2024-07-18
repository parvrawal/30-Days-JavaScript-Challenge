// Day 6: Array

// Activity 1: Array Creation Access

// Task 1- Create an array of numbers from 1 to 5 and log the array to the console

let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2- Access the first and last elements of the array and log them to the console

let heros = ["Superman", "Batman", "Wonder Women", "Flash"];
console.log(heros[0], heros[3]);

// Activity 2: Array Method (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log to the console

let number = [34, 56, 2, 76, 8];
number.push(9, 0);
console.log(number);

// Task 4- Use the pop method to remove the last element from the array and log the updated array

let favCartoon = ["Ben 10", "Tom and Jerry", "Shinchan", "Scoobey do"];
favCartoon.pop();
console.log(favCartoon);

// Task 5- Use the shift method to remove the first element from the array and log the updated array.

let marvelHeros = ["Black Widow", "Thor", "Captain America", "Iron Man"];
marvelHeros.shift();
console.log(marvelHeros);

//  Task 6- Use the unshift method to add a new number to the beginning of the array and log the updated array

let num = [4, 7, 2, 9];
num.unshift(10, 6);
console.log(num);

// Activity 3: Array Method (Intermediate)

// Task 7- Use the map method to create a new array where each number is doubled and log the new arra

let orignalArray = [2, 5, 7, 9];
let newArray = orignalArray.map((num) => num * 2);

console.log(newArray);

//  Task 8 - Use the filter method to create a new array with only even numbers and log the new array

let myNum = [2, 5, 7, 8, 3];
let newNum = myNum.filter((num) => num % 2 === 0);
console.log(newNum);

// Task 9- Use the reduce method to calculate the sum of all numbers in the array and log the result

let values = [3, 5, 6, 7];
let newValues = values.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(newValues);

// Acitvity 4: Array Iteration

// Task 10- Use a for loop iterate over the array and log each element to the console

let priceTag = [23, 5, 7, 8];
for (let i = 0; i < priceTag.length; i++) {
  console.log(priceTag[i]);
}

//  Task 11- Use the forEach method to iterate over the array and log each element to the console

let newPriceTag = [240, 150, 500];
newPriceTag.forEach((element) => console.log(element));

// Activity 5: Multi-dimensional Arrays

// Task 12- Create a two-dimensional array (matrix) and log the entire array to the console

let two_dimensional = [
  [1, 4, 6],
  [7, 9, 2],
  [3, 4, 0],
];

console.log(two_dimensional);

// Task 13- Access and log a specific element from the two-dimensional array

let new_dimensional = [
  [23, 56, 89],
  [21, 76, 9],
  [1, 9, 3],
];

let specificElement = new_dimensional[2][1];
console.log(specificElement);
