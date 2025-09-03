// data types : datatypes means what kind of values are stored 
//it tells the computer that what kind of data is stored(number , string , bool , null , undefined , symbool , bigint )
//and what operations to peform it 

//basically datatypes have 2 types 
//primitive and non primitie 
//primitive are --- immutable data ypes
// stored directly in memory 
//represend a single value
//values stroed in stack memory


//non-primitive datatype
//mutable->can be changed
//stored ini heap memory only refrene address stored in stack memory

//-----------------------------------------primitive dta types
const sizeof = require("object-sizeof");
let  age = 21;
// let  pi = 3.14;
// let area = 32178437431.314342;

// console.log(age , pi , area);
console.log(typeof(age))
// console.log(typeof(pi));
// console.log(typeof(area));
console.log(sizeof(age), "bytes");  

console.log("\n")
const  name = "swati sen";
 console.log(name);
 console.log(typeof(name));
 console.log(sizeof(name));
 console.log("\n")
const isStudent = true;
console.log(isStudent)
console.log(typeof(isStudent))
console.log(sizeof(isStudent))
console.log("\n")
const score = null;
console.log(score)
console.log(typeof(score));
console.log(sizeof(score));
console.log("\n")
let x;
console.log(x);
console.log(typeof(x));
console.log(sizeof(x));
console.log("\n")
let big = 1653147398424345n;
console.log(big);
console.log(typeof(big));
console.log(sizeof(big));

//-------------------------------non -primitive data types
console.log("\n")
//object  data  type

let  person = {name:"swati", age:21};
console.log(person);

//array type

let numbers = [1,2,3,4];
console.log(numbers);

// function type data 

function  add(a,b)
{
    return  a+b;
}
console.log(add(10,10));

//date 

let today = new Date();
console.log(today);

//map

let map = new Map();
map.set("name", "swati");

console.log(map);


///-----------------------------------other  methods
let notAnumber = 10;

console.log("abc" / notAnumber);



console.log(10/0)

console.log(-10/0)