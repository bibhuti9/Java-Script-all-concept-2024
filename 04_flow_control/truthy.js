const userEmail =  "balram@gmail.com"
// truthy value check
if(userEmail){
    // console.log("Got user email");
}else{
    // console.log("Don't have user email");
}
// output = Got user email

const userEmails =  ""
// flasy value check
if(userEmails){
    // console.log("Got user email");
}else{
    // console.log("Don't have user email");
}

// output = Don't have user email

const userEmailss =  []
if(userEmailss){
    // console.log("Got user email");
}else{
    // console.log("Don't have user email");
}
// output :Got user email


if(userEmailss.length === 0){
    // console.log("Array Is Empty");
}
// output :Array Is Empty

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    // console.log("Object Is Empty");
}
// output : Object Is Empty



// flasy value 
    // flase, 0, -0, BigInt 0n, "", null, undefined, NaN
//truthy values
    // "0", 'flase',"flase"," ",[],{},function(){},



// false == 0  -> true
// flase == '' -> true
// flase == "" -> true
// 0 == ""     -> true



//Nullish Coalescing Operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10;          // output: 5;
//val1 = null ?? 10;       //  output: 10;
// val1 = undefined ?? 15; //  output: 15;
val1 = null ?? 10 ?? 15;  //   output: 10;

console.log(val1); 


// Terniary  Operator

    // condition ? true: flase

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
// output : more than 80;

