// Destructuring

const course = {
    courseName:"Js In Hindi",
    price:"999",
    courseInstructor:"Balram"
}

const {courseInstructor:Instructor,price,courseName} = course;
console.log(Instructor);
console.log(price);



// api syntex
    // {
    //     "name":"Balram",
    //     "courseName":"Js",
    //     "price":"free"
    // }

// secondtype
//  [
//     {},
//     {},
//     {}
//  ]