function  applyDiscount(price, discountPercent)
{
     return  price * (1-discountPercent / 100);
}
console.log(applyDiscount(1000 , 10));
console.log(applyDiscount(500 , 20));

