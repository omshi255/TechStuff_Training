// airthematic operator (+ , - , * , / ,% , ** , ++ , --)
// let a = 10;
// let b =20;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);
// console.log(++a);
// console.log(--a);
// console.log(a++);
// console.log(a--);


const  num1 = Number(prompt("enter  the  num 1"));
const  num2 = Number(prompt("enter the num2"));
const op = prompt("enter  the operator : (+ , - , * , / , %)");

if(op == '+')
{
     let  sum = num1+num2;
     console.log(sum);
     
}
else if(op == '-')
{
    let sub = num1-num2;
    console.log(sub);
    
}
else if(op == '*')
{
    let  mul = num1*num2;
    console.log(mul);
    
}
else if(op == '%')
{
    let  mod = num1%num2;
    console.log(mod);
    
}
else if(op == '/')
{
    let  div = num1/num2;
    console.log(div);
    
}
else
{
    console.log("invalid op");
    
}