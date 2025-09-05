// sort()

// Question:
// A shop has the following daily sales in units: [25, 10, 50, 30]. Sort the 
// sales in ascending 
// order to find which day had the lowest to highest sales.

console.log("\n");

let numbers = [
  45, 12, 78, 34, 56, 89, 23, 67, 90, 11,
  5, 38, 72, 18, 49, 61, 84, 27, 95, 40,
  33, 50, 17, 63, 81, 29, 70, 14, 99, 8
];

console.log("Arrays before Sorting : ",numbers);

console.log("\n");

let  sortedarrrays = numbers.sort((a , b) => a - b);
console.log( "Arrays  after sorting" , sortedarrrays);
