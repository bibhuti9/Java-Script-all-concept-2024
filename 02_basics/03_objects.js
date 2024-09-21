// signaleton
//Object.create

// object literals  
const mySym = Symbol("Key1");

    const JsUser = {
        name :"balram",
        "full name":"Balram Panda",
        age:25,
        [mySym] : "mykey1",
        location:"surat",
        email:"balram@google.com",
        isLoggedIn: false,
        lastLoginDay:["Monday","Saturday"]
    }

console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser[mySym]); // document check 

// chang the object value
JsUser.email = "balram@chartgpt.com"
console.log(JsUser.email);

// use funcation in object 
    JsUser.greeting = function(){
        console.log("Hello Js User");
    }
    console.log(JsUser.greeting); 
        //output = [Function (anonymous)]
    console.log(JsUser.greeting());
    JsUser.greetingTwo = function(){
        console.log(`Hello Js User ${this.name}`);
    }
    console.log(JsUser.greetingTwo());
JsUser.email = "balram@chartgpt.com"
Object.freeze(JsUser) 
    // not change any value in the object using freeze
JsUser.email = "balram@microsoft.com"
console.log(JsUser);

//output =  {
    // name: 'balram',
    // 'full name': 'Balram Panda',
    // age: 25,
    // location: 'surat',
    // email: 'balram@chartgpt.com',
    // isLoggedIn: false,
    // lastLoginDay: [ 'Monday', 'Saturday' ],
    // greeting: [Function (anonymous)],
    // greetingTwo: [Function (anonymous)],
    // [Symbol(Key1)]: 'mykey1'
//   }

