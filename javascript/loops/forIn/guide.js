// Definition:
// Iterates over the keys (property names) of an object.

// for(let key in object)
// {
//     //code block
// }

let person = {name:"Swati" , age:21,city:"Indore"};

for(let key in person)
{
    console.log(key,":",person[key]);
    
}