// 2) signaleton
//Object.create

const tinderUser = new Object();  //signaleton Object
//console.log(tinderUser);  
    //  output : {}
const tinderUser1 = {}; // not signaleton object
//console.log(tinderUser1);
    //  output : {}

const tinderNewUser = new Object(); 
tinderNewUser.id = "123abc";
tinderNewUser.name="Sunita Das";
tinderNewUser.email="Sunita@gmail.com";
tinderNewUser.isLoggedIn = false;

// console.log(tinderNewUser);

console.log(Object.keys(tinderNewUser)); 
   // output:[ 'id', 'name', 'email', 'isLoggedIn' ]
console.log(Object.values(tinderNewUser));
    //output :[ '123abc', 'Sunita Das', 'Sunita@gmail.com', false ] 
console.log(Object.entries(tinderNewUser));
    // output : [
    //     [ 'id', '123abc' ],
    //     [ 'name', 'Sunita Das' ],
    //     [ 'email', 'Sunita@gmail.com' ],
    //     [ 'isLoggedIn', false ]
    //   ]


    // all are give the array type;
    //  Object.keys , Object.values, Object.entries it is large use the data base to given val


// check key is exite ya not exti in object


console.log(tinderNewUser.hasOwnProperty('isLoggedIn'));
    //output : true



//****************nexting object****************
const ragularUser = {
    email:"some@gmail.com",
    fullname:{
        name:"Balram Panda",
        userfullname:{
            firstname:"Balram",
            lastname:"Panda"      
        }
    }
}
//console.log(ragularUser.fullname);
    // output: {
    //     name: 'Balram Panda',
    //     userfullname: 
    //       { 
    //            firstname: 'Balram',                  
    //            lastname: 'Panda' 
    //        }
    //   }
//   console.log(ragularUser.fullname.userfullname.firstname);
        // output:Balram;


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2};
   // console.log(obj3);
         // output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({},obj1,obj2);
    // const obj4 = Object.assign(obj1,obj2);
console.log(obj4);
        // output : { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// Spread Operator Use In Object
    const obj5 = {...obj1,...obj2}
    console.log(obj5);
        // output:{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// array inside the object
    const users = [
        {
            id:1,
            name:"balram"
        },
        {
            id:1,
            name:"ram"
        },
        {
            id:1,
            name:"sunita"
        },
    ]
    console.log(users[0].name);
    console.log(users[1].name);