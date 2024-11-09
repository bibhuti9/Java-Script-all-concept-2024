// {} => scopes use the function,conditional statements(if,else etc...);

// scopes  is the two tipes
//         1) block scopes;
//         2)global scopes;


    //  go to the browser and check the scopes (course) 
    // use the code environment node through check the  gobal scopes is  full different 
 
//  c = 300;  //<- var c = 30

let a = 300
if(true){

    let a = 10;
    const b = 20;
    // var c = 30;
    console.log("INNER:",a);  // output ->INNER: 10
    
}
// console.log(a);  not use the a variables in   out of  block scopes {}
//console.log(b); //  not use the a variables in  out of block scopes {}
// console.log(c);   // it is use the out of block scopes {}

console.log(a); // output ->300




//   nexted scopes


function one(){
    const userName = "Balram";

    function tow(){
        const  website = "youtube";
        console.log(userName); // output -> Balram
    }
    // console.log(website);  // output -> error
    tow();
}
 one();



if(true){
    const username = "Balram"
     if(username === "Balram"){
        const secondname = " Sunita"
         console.log(username + secondname); // output - > Balram Sunita
     }
    //  console.log(secondname);  // output - > error
}
// console.log(username);  // output - >  error




//+++++++++++++++++++++++++ interesting ++++++++++++++++++++++++


console.log(addone(5));  // output = > 6
function addone(num){
    return num + 1;
}


// hosting
addTwo(5);  // output -> Cannot access error
const addTwo =  function(num){    // hoisting 
    return num + 2;
}

