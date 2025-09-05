// Labeled statement

//labelname:
//{

//}

outerLoop: for(let i =1 ; i<=3 ; i++)
{
    for(let j =1;j<=3;j++)
    {
        if(j===3) break outerLoop;
        console.log( i , j);
        
    }
}

//break and  continue

//defination: exists the nearest loop  or switch immidately

// styntax ;
//  break;

for(let i =1;i<=10;i++)
{
    if(i===5) break;

    console.log(i);
    
}

//continue  statement

//skips the current  iteration and continues with the next one

//continue;

for(let i =1;i<=5;i++)
{
    if(i===3) continue;
    console.log(i);
    
}