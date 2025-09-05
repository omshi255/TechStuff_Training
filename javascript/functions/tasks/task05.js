const  cart = [10, 20 , 30 , 40 , 50 , 60]

function calculateTotal(cart)
{
    let sum = 0;
   for(let i = 0;i<cart.length;i++)
   {
      sum +=cart[i];
   }
   return sum;
}
console.log(calculateTotal(cart));
