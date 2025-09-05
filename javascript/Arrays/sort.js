// sort() sorts array elements. By default, it sorts as strings.

// Can pass a compare function to sort numerically.

// Array.sort()       //default  string sort
// Array.sory((a,b) => a-b);   //  nnumeric  ascending
// Array.sort((a,b)=>b-a);   //  neumaric descending


//-------------------------array.sort()

let arr = [10 , 5 , 40 , 25 , 100];
arr.sort();
console.log("normal sort",arr);



// Default sort() converts numbers to strings and sorts lexicographically (like dictionary order).

// That’s why 100 comes before 25 and 40.


//----------------------------------arr.descending sort

let  array = [10 , 5 , 40 , 25 , 100];
array.sort((a,b)=>b-a);
console.log("descending sort",array);

//----------------------------------array.ascending() sort

let  array1 = [10 , 5 , 40 , 25 , 100];
array1.sort((a,b)=>a-b);
console.log("ascending sort",array1);

