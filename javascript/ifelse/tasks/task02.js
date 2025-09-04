// Number Analyzer
// Write a program that takes a number as input and checks:

// Is it positive, negative, or zero?

// If it’s positive, check whether it’s even or odd.

const inp = Number(prompt("enter  the number : "));
if (inp > 0) {
  if (inp % 2 === 0) {
    console.log("given number is positive as well  as even");
  } else {
    console.log("given number is positive but odd");
  }
} else if (inp < 0) {
  if (inp % 2 === 0) {
    console.log("given number is negative as well  as even");
  } else {
    console.log("given number is negative  but odd");
  }
} else if (inp === 0) {
  console.log("given number  is Zero");
} else {
  console.log("give me correct op");
}
