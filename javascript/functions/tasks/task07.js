
const n = [0, 3, 7, 10, 15, 20, 25, 30, 35, 40];


const filterEven = n=>n.filter(num=>num%2==0)
 console.log("Even numbers are: ",filterEven(n));
 
console.log("\n");

 const filterOdd = n=>n.filter(num=>num%2!==0)
 console.log("Even numbers are: ",filterOdd(n));