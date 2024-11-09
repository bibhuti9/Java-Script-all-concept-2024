function sayMyName(){
    console.log('B');
    console.log('A');
    console.log('L');
    console.log('R');
    console.log('A');
    console.log('M');
}
sayMyName //->reference
//sayMyName(); //->execution

function addTwoNumbers(number1,number2) /*parameters in the function*/ {
    console.log(number1 + number2);
}
// addTwoNumbers(3,4);   // argument in the function
//  //output = 7
// addTwoNumbers(3,"4");
//   //output = 34
// addTwoNumbers(3,"a");
//    //output = 3a
// addTwoNumbers(3,null);
//     //output = 3
// addTwoNumbers(3,true);
//     //output = 4
// addTwoNumbers(3,false);
//     //output = 3
// addTwoNumbers(3,0.1);
//     //output = 3


// const result  = addTwoNumbers(3,5);  // output = 8
// console.log("Result value:-",result); //Result value:- undefined

function addTwoNumber(number3,number4) /*parameters in the function*/ {
      let results = number3 + number4
      //console.log("Balram");         // this is line code is print
      return results
     //console.log("Balram");   // this is line code is not print
}
const results  = addTwoNumber(3,5);
// console.log("Result value:-", results);  // out put = Result value:- 8


function addTwoNumberss(number5,number6) /*parameters in the function*/ {
      return number5 + number6
}
const resultss  = addTwoNumber(3,6);
// console.log("Result value:-", resultss);  // out put = Result value:- 9




function loginUserMessage(username){
    if(!username){
        return console.log('Please Enter Your UserName');
    }
    return `${username} just logged in...`
}
// console.log(loginUserMessage("Balram")); // output = Balram just logged in...
// console.log(loginUserMessage("")); // output = just logged in...
// console.log(loginUserMessage());  //output = undefined just logged in...

// loginUserMessage()  //output = Please Enter Your UserName
// console.log(loginUserMessage());  //output = Please Enter Your UserName ,  undefined


function loginUserMessages(usernames = "sam"){
    if(!usernames){
        return console.log('Please Enter Your UserName');
    }
    return `${usernames} just logged in...`
}
console.log(loginUserMessages());  // output = sam just logged in...
console.log(loginUserMessages("Balram"));// output = Balram just logged in...