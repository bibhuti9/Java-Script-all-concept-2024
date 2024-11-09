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