// const fbUser = new Object()  //------object literals
 const fbUser={} //--- singalton object
 fbUser.id = "123abc"
 fbUser.name = "sammy"
 fbUser.isloggedin = false

 
console.log(fbUser);


const  regularuser = 
{
    gmail:"some@gmail.com",
    fullname:
    {
        userfullname :
        {
            firstname:"swati",
            lastname:"sen"
        }
    }
}
console.log(regularuser.fullname?.userfullname.firstname)




const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4: "b"}
// const obj3 = {obj1 , obj2}
//const obj4 = {5:"a" , 6:"b"}
//const obj3 = Object.assign({} , obj1 , obj2 ,obj4) //ootoinal parameter {} jo bhi value hongi these  will be merged

//console.log(obj3);


const obj3 = {...obj1 , ...obj2}
console.log(obj3);


const users = [
    {
        id:1,
        email:"swati@gmail.com"
    },
    {
         id:1,
        email:"swati@gmail.com"
    }

    , {
        id:1,
        email:"swati@gmail.com"
    },
    {
         id:1,
        email:"swati@gmail.com"
    }, {
        id:1,
        email:"swati@gmail.com"
    },
    {
         id:1,
        email:"swati@gmail.com"
    }, {
        id:1,
        email:"swati@gmail.com"
    },
    {
         id:1,
        email:"swati@gmail.com"
    }
]



users[1].email
console.log(fbUser);


console.log(Object.keys(fbUser));
console.log(Object.values(fbUser));

console.log(Object.entries(fbUser));

console.log(fbUser.hasOwnProperty('isloggedin'));
