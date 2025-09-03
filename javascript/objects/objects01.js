// basically we make objects in 2 ways literals and singelton
//object.create // we make objects through constructor
//we can define the keys and value pairs in js
//we can give various rrays and functions inside the objects 
//---objects  are the  real world entities
 const mysym = Symbol("key1");
const user = {
    name:"swati",
    "full name": "swati sen",
    age:"21",
    location:"jaipur",
    email:"swati@gmail.com",
    iisLoggedIn:false,
    [mysym] :"my key1",
    LastloginDays:["monday" , "saurday"]

}



//we can access the array using 2 ways
//1st way : using dot(.)
//2nd way : using []

console.log(user.email);
console.log(user["email"])
console.log(user["full name"]);
console.log(typeof(user[mysym]));
console.log(user[mysym]);



//we can overwrite values using equal = 
//we can lock the  values also by makeiing it freez


user.email = "omshi@gmail.com";
// Object.freeze(user);
user.email = "omshree@gmail.com"
console.log(user);


user.greeting = function()
{
    console.log("hello js user");
    
}

console.log(user.greeting);


user.greetingtwo=function()
{
    console.log(`helllo js user ${this.name}`);
    
}