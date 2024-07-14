// Day2 - Operators

//Activity 1


//Task 1 : Write a program to add two numbers and log the result to console

const myNumber = 68;
const myFriendNumber = 70;
const totalOurNumber = myNumber + myFriendNumber;

console.log(totalOurNumber);

// Task 2 : Write  a program to subtract two numbers and log the result to console

const givenMoney =  200;
const productPrice = 120;
console.log(givenMoney - productPrice);

// Task 3: Write a program to Multiply two numbers and log the result to console

const vanillaChocolate = 50;
const totalBuy = 6;
console.log(vanillaChocolate * totalBuy)

// Task 4: Write a program to divide two numbers and log the result to console
const payPrice = 600;
const contribute = 4;
const perPerson = payPrice / contribute
console.log(perPerson);

// Task 5 : Write a program to find the remainder when one number divided by another and log the result to  console

const number1 = 12;
const number2 =  7;
const remainder = number1 % number2;
console.log(remainder);

// Activity 2 - Assignment  Operators

// Task 6 : Use the += operator to add a number to a variable and log the result to console

let number = 23;
number += 4;
console.log(number);

// Task 7 : Use the -= operator to subtract a number to a variable and log the result to console

let myWallet = 100;
myWallet -= 37;
console.log(myWallet)

// Activity 3 - Comparsion Operator

// Task 8 : Write a Program to compare two numbers using > and < and log the result to console
let smallBox = 5;
let bigBox = 7;

if( smallBox > bigBox){
    console.log(` ${smallBox} is greater than ${bigBox}`);
} else if( smallBox < bigBox){
    console.log(` ${smallBox} is less than ${bigBox} `);
}else{
    console.log(`${smallBox} and ${bigBox} both are equal`);
}

// Task 9 : Write a program to compare two number using >= and <= and log the result to console

let myClass = 12;
let myFriendClass = 11;

if(myClass >= myFriendClass){
    console.log(`We're buddies`)
}else if (myClass <= myFriendClass){
    console.log(`I'm not his friend`);
}

// or

console.log(myClass >= myFriendClass);
console.log(myClass <= myFriendClass);

// Task 10: Write a program to compare two numbers using  == and === and log the result to the console

let herNumber = 9456738;
let herFriendNumber = "9456738"

console.log( herNumber == herFriendNumber);
console.log(herNumber === herFriendNumber);

// Activity 4 - Logical Operator

// Task 11 : Write a program that uses the && operator to combine two condition and log the result to console

const laptopPrice = 40000;
const fatherAgree = true;

if(laptopPrice <= 42000 && fatherAgree){
    console.log(`Finally its happening`);
}else {
    console.log(`hell no!`);
}

// Task 12: Write a program that uses the || operator to combine two condition and log the result to console

const age = 20;
const hasLicense = true

if(age > 18 || hasLicense){
    console.log("You are eligible to drive.");
}else{
    console.log("You are not eligible to drive.");
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result  to console

const hasFriend = false;

if(!hasFriend ){
    console.log("Everyone has a friend")
}else{
    console.log("Good to hear");
}

// Activity 5 - Ternary Operator    

// Task 14:  Write a program that uses the ternary operator to check if a  number is postive  or negative and log the result to console

const mathMarks = 67;
const totalMarksPaper = mathMarks >= 70 ? "Postive" : "Negative"

console.log(totalMarksPaper);













