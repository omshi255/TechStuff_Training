// //filter
// filter() creates a new array containing only the elements that pass a test (condition returns true).

//syntax 

// let newArray = array.filter(function(element)
// {
//       return condition;
// })


let numbers  = [1,2,3,4,5];
let even = numbers.filter(n=>n%2 === 0);
let odd = numbers.filter(n=>n%2!==0);
console.log(even);
console.log(odd);


