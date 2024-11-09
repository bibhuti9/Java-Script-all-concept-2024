// this -> it refers to the current contacts(value). 
 
// global object inside the browser is the window object

const user  = {
    username:"Balram",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} ,Welcome to website`);
        // console.log(this);
             //console.log(this) -> output - > 
                    //Balram ,Welcome to website
                    // {
                    //     username: 'Balram',
                    //     price: 999,
                    //     welcomeMessage: [Function: welcomeMessage]
                    //   }
                    //   Sunita ,Welcome to website
                    //   {
                    //     username: 'Sunita',
                    //     price: 999,
                    //     welcomeMessage: [Function: welcomeMessage]
                    //   }
        
    }
}


// user.welcomeMessage()
// user.username = "Sunita"
// user.welcomeMessage();


//  console.log(this);    // output -> {}
   // inside no environment so your this is referencing empty object 


// function chai1(){
//     let username = "Balram"
//     console.log(this) //-> gobal object ->  Object [global]{}
//     console.log(this.username); // output -> undefined
//     // not use this using the funcation chai()
// }
// chai1();


// const chai2  = function (){
//     let username = "Balram"
//    console.log(this.username); // output => undefined
// }
// chai2();


// const chai  = () => {
//     let username = "Balram"
//     console.log(this) // output -> {}
//    console.log(this.username);  // output -> undefined
// }
// chai();



// explicit return
const  addTwo = (num1,num2)=>{
    return num1 + num2;
}
console.log(addTwo(3,4)); // output -> 7

// implicit return  (use the one line code only)
const addTwo1 = (num1,num2)=> num1 + num2;
console.log(addTwo1(3,4));  // output -> 7


const addTwo2 = (num1,num2)=> (num1 + num2);
console.log(addTwo2(3,4));  // output -> 7

const addTwo3 = (num1,num2)=> ({username:"Balram"});
console.log(addTwo3(3,4)); // output-> {username: 'Balram'} and not use the num1,num2 value