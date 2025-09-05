// map() creates a new array by applying a function to each element of an array.

// let newArray = array.map(function(element)
// {

//     //return modify  element 

// });

let numbers = [1,2,3,4];
let squares = numbers.map(n=>n*n);
console.log(squares);


let cube = [1,2,3,4,5,6,7,8,9,10];
let number = cube.map(n=>n*n*n);
console.log(number);

let double = [1,2,3,4,5,6,7,8,9,10];
double= double.map(n=>n+5);
console.log(double);
