// Day 3: Control Structures

//Activity 1 - If-else Statements

// Task 1 - Write a program to check if a number is positive, negative, or zero,  and log the result to the console.
let number = -9;

let result;
if (number > 0) {
  result = "Positive";
} else if (number < 0) {
  result = "Negative";
} else {
  result = "zero";
}

console.log(` The number ${number} is ${result}`);

// Task 2 - Write a program  to check if a person is eligible to vote (age >= 18) and log the result to the console

let age = 15;

if (age >= 18) {
  console.log(`"The age of ${age} is eligible to vote." `);
} else {
  console.log(`The age of ${age} is not eligible to vote `);
}

// Activity 2 - Nested If -else Statements

//Task 3- Write a program to find the largest of three numbers using nested if-else statments

let num1 = 23;
let num2 = 4;
let num3 = 14;

let largest;
if (num1 >= num2) {
  if (num1 >= num3) {
    largest = num1;
  } else {
    largest = num3;
  }
}
if (num2 >= num3) {
  if (num2 >= num1) {
    largest = num2;
  } else {
    largest = num3;
  }
}

console.log(`The largest number among ${num1}, ${num2}, ${num3} is ${largest}`);

// Activity 3- Switch Case

//Task 4- Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the result to the console

let week = 5;

switch (week) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invaild ");
}

//Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C','D','F') based  on a score  and log the result to the console

let marks = 67;
let grade = "";

switch (true) {
  case marks >= 90 && marks <= 100:
    grade = "A";
    break;
  case marks >= 80 && marks <= 89:
    grade = "B";
    break;
  case marks >= 70 && marks <= 79:
    grade = "C";
    break;
  case marks >= 60 && marks <= 69:
    grade = "D";
    break;
  case marks < 60:
    grade = "E";
    break;
  default:
    grade = "Inavild";
}

console.log(grade);

//  In this case True statement allows each case to evaluate a boolean expression


// Activity 4 - Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console

let value  = 87;

let check = (value % 2 === 0) ? "Even" : "Odd" ;

console.log(check);

// Activity 5- Combining Condition

//  Task 7: Write a program to check  if a year  is a leap year using multiple condition ( divisible by 4, but not 100 unless also divisible by 400 ) log the result to the console

let year = 2025;

let isLeapYear;

if(year % 4 === 0){
    if(year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)){
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }
    
} else {
    isLeapYear = false;

}
if(isLeapYear){
    console.log(`The year ${year} is a leap year`);
 }else {
    console.log(`The year ${year} is not a leap year`);
 }








