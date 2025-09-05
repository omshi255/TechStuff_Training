
// Question:
// You have a list of cities you plan to visit: ["Delhi", "Mumbai", "Bangalore"]. 
// Check if "Pune" is included in your list.
let cities = [
  "Delhi",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Pune",
  "Hyderabad",
  "Jaipur",
  "Ahmedabad",
  "Lucknow"
];

console.log("array  before applying includes methods : ",cities);

let  includeCities = cities.includes("Delhi");
console.log("array  after applying includes methods : ",includeCities);


let notincludeCities = cities.includes("canada");
console.log(notincludeCities);
