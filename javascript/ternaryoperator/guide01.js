// 1. Definition

// The ternary operator (? :) is a shorthand way of writing an if…else statement.
// It’s called “ternary” because it takes three parts:

// Condition → must be true or false

// Expression if true

// Expression if false

// syntax 

// condition ? trueexp : falseexp
let  age = 1;

let message  = (age >= 18)?"adult":"minor"
console.log(message);

let num = -7;

let res = (num>=0)?"Positive" : "negative";
console.log(res);
