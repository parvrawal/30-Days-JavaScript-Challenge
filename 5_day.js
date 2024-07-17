//  Day 5: Functions

// Activity 1: Function Declaration

// Task 1- Write a function to check if a number is even or odd and log the result to the console

function checking(number) {
  if (number % 2 === 0) {
    console.log(`The ${number} number is an Even number`);
  } else {
    console.log(`The ${number} number is an Odd number`);
  }
}

checking(78);

// Task 2- Write a function to calculate the square of a number and return the result

function square(number) {
  return `The square of ${number} is ${number * number}`;
}

console.log(square(7));

// Activity 2: Function Expression

// Task 3- Write a function expression to find the maximum of two numbers and log the result to the console

let maxNumber = function (num1, num2) {
  return Math.max(num1, num2);
};

let twoNumber = maxNumber(10, 40);
console.log(twoNumber);

// Task 4- Write a function expression to concatenate two strings and return the result

function concatenate(string1, string2) {
  return string1.concat(string2);
}

let str = concatenate("Parv", " Waiting");

console.log(str);

// Activity 3: Arrow Function

// Task 5- Write a arrow function to calculate the sum of two numbers and return the result

let sum = (num1, num2) => {
  return `The sum of the ${num1} and ${num2} is ${num1 + num2}`;
};

let val = sum(4, 6);
console.log(val);

// Task 6- Write a arrow function to check if a string contains a specific character and return a boolean value

let arr = (arr1, arr2) => {
  return arr1.includes(arr2);
};

let companyName = "Perpetual Income & Growth Investment Trust PLC";
let similar = "Income";

console.log(arr(companyName, similar));

// Activity 4: Function Parameters and Default Values

// Task 7- Write a function that takes two parameters and returns their product. Provide a default value for the second parameter

let multiply = (a, b = 1) => {
  return a * b;
};

console.log(multiply(5, 6));
console.log(multiply(3));

// Task 8 - Write a function that takes a person's name and age and return a greeting message. provide  a default value for the age

function information(name, age = 18) {
  if (name && age) {
    console.log("Thank You for giving us Your Personal Details");
    console.log(`Name You have added is ${name} and age is ${age}`);
  } else {
    console.log("Please add your Personal Details");
  }
}

let personalDetail = { name: "Parv", age: 20 };

information(personalDetail.name, personalDetail.age);

// Activity 5: Higher-Order Functions

// Task 9- Write a higher-order function that takes a function and a number, and calls the function that many time

function repeat(fn, times) {
  for (let i = 0; i < times; i++) {
    fn();
  }

  return;
}

repeat(() => {
  console.log("Waiting for the Bus");
}, 3);


//  Task 10- Write a higher-order function that takes two functions and value, applies the first function to the value, and then applies the second function to the result


function applyFunction(fn1, fn2, value) {
  const result1 = fn1(value);
  const result2 = fn2(result1);
  return result2;
}

function addSix(num) {
  return num + 6;
}

function multiplyByTwo(num) {
  return num * 2;
}

const initialValue = 20;
const finalResult = applyFunction(addSix, multiplyByTwo, initialValue);

console.log(finalResult); 
