
// if
// if(true){ }

const isUserLoggedIn = true;
if(isUserLoggedIn){
// console.log(`Balram Welcome In Webside`)
}

if(2 == "2"){
// console.log("executed"); // output = executed;
}

if(2 == "2"){
    // console.log("executed"); // output = executed;
}else{
    console.log("No executed"); 
}

if(2 === "2"){
    console.log("executed"); 
}else{
    // console.log("No executed"); // output = No executed;
}
const temperature = 41
if(temperature < 50){
    //  console.log(`less than 50`);
}else{
    console.log(`No less than 50`);
}
  
// <, >, <=, >=, ==, ===, !=, !==



// shorthand notation

// const balance = 1000
// if(balance > 5000) consol.log("test");  // implicit scope


// const balance = 1000

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750"); 
// }else if(balance < 900){
//     console.log("less than 900"); 
// }else{
//     console.log("less than 1200"); 
// }
// output  :- less than 1200;



const userLogged = true;
const debitCard = true;
const userLoggedinFromGoogle = false;
const userLoggedinFromEmail = true;

if(userLogged && debitCard){
    // console.log("Allow to buy course")
}
//output :- Allow to buy course
if(userLogged && debitCard || userLoggedinFromGoogle){
    console.log("Allow to buy course")
}
if(userLoggedinFromEmail || userLoggedinFromGoogle){
    console.log("User LoggedIn")
}else{
    console.log("User Not LoggedIn")
}   
// output  :- User LoggedIn

