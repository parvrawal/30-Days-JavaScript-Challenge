//Day 4: Loops

// Activity 1: For Loop

// Task 1- Write a program to print numbers from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2- Write a program to print a multiplication table of 5 using a for loop
let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(` ${number} x ${i} = ${number * i}`);
}

// Activity 2: While loop

// Task 3- Write a program to calculate the sum of numbers from 1 to 10 using a while loop

let num = 1;
let sum = 0;

while (num <= 10) {
  sum += num;

  console.log(`The sum of numbers up to ${num} is ${sum}`);
  num++;
}

// Task 4- Write a program to print numbers from 10 to 1 using  a while loop

let reversedNum = 10;

while (reversedNum >= 1) {
  console.log(reversedNum);
  reversedNum--;
}

//  Activity 4: Do.. while loop

// Task 5- Write a program to print numbers from 1 to 5 using do... while loop

let value = 1;

do {
  console.log(value);
  value++;
} while (value <= 5);

//  Task 6- Write a program to calculate the factorial of a number using a do.. while loop

let result = 1;
let i = 6;

do {
  result *= i;
  i--;

  console.log(result);
} while (i > 0);

//  Activity 4: Nested Loops

// Task 7-  Write a program to print a pattern using nested for loops

let rows = 5;

for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let p = 1; p <= i; p++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// Activity 5: Loop Control Statements

//  Task 8- Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

// Task 9-  Write a program to print numbers from 1 to 20, but stop the loop when the number is 7 using the break statement

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }

  console.log(i);
}
