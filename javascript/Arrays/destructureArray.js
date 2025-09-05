// Destructuring allows you to unpack values from arrays into separate.

let  arr = [10 , 20 , 30];
let [ a ,b ,c] = arr;
console.log(a,b,c);


//example with rest operator

let  arrayWithRestOperator = [5 , 10 ,15 , 20 , 30 , 40 , 50 , 60];
let [x , y , ...rest] = arrayWithRestOperator;
console.log(x,y);
console.log(rest);


