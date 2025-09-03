const  course = 
{
    coursename:"js in hindi",
    price:"999",
    courseInstructor: "swati"
}

// course.courseInstructor -------syntax
 //----------------------desturing of  the  objects  
const {courseInstructor:instructor} = course
//console.log(courseInstructor);  ///  will show error 

console.log(instructor);


