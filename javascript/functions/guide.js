//--------------------Function

// fucntion is a block of reusable code tht performs a specific task

// fucntion helps to avoid repetittion 
// they make code mmodular  and readable


// syntax --

// function  functionName(parameters)
// {
//     //code to execute
//     return result;
//     //optional
// }


function  greet(name)   // defination 
{
    return "Hello ," + name;    // task to perform
   
}
console.log(greet("swati"));    // calling



// 4. Parameters vs Arguments

// Parameters → placeholders inside the function definition.

// Arguments → actual values you pass when calling the function.




function add(a , b)  // a , b ===> parameteres
{
    return  a+b;
}
console.log(add(5 , 10));   // 15 -> 5 ,5 10 are the arguments

//5 . named function --the function that has name

function multiply (x,y)
{
    return x*y;
}
console.log(multiply(4 , 3)); //  12



// 6. Anonymous Functions

// A function without a name, usually stored in a variable.



const divide = function (a , b)
{

    return a/b;
}
console.log(divide(20,5)); // 4


// 6. Anonymous Functions

// A function without a name, usually stored in a variable.


const  Adivide = function(a,b)
{
    return a/b;
};
console.log(Adivide(10 , 10));


// 7. Return Values

// A function can return a value using the return keyword.
// If no return, the function gives undefined.

function  square(num)

{
  return  num*num;
}
console.log(square(3));


// 8. Arrow Functions

// Introduced in ES6, shorter way to write functions.

const  subtract = ( a  , b)=>
{
    return  a-b;
};
console.log(subtract(10 , 4));

// 9. One-line Functions (Implicit Return)

// If function body has only one statement, you can write it in one line without return and {}.
const double = n => n*2
console.log(double(7));
