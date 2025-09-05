// Array Destructuring

// Question:
// You have an array of coordinates: [10, 20, 30]. Use destructuring to store the first 
// coordinate as x, the second as y, and the rest in another 
// array restCoordinates. Then print them.


let  arr = [10 ,20 , 30 , 40 ,50 ,60 ,70];
let [x,y,...rest] = arr;


let  thirdAndFourth = rest.slice(0,2)
console.log(x , y);
console.log(thirdAndFourth);
console.log(rest);



