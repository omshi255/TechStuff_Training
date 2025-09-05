// You are organizing a grocery list. Store the following items in an array: "Milk", 
// "Eggs", "Bread", "Butter". Then print the first 
// item and the total number of items in your list.


let  arr = ["MILK","EGGS","BREAD","BUTTER","CHHIPS","CURD","PASTA"];
console.log(arr);
let count = 0;
for(let i = 1 ; i<=arr.length ; i++)
{
    count++;
}
console.log(`I have ${count} items in my Grocery store`,count);

