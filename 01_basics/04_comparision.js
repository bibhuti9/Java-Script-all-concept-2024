// console.log(2>1);
// console.log(2>=1);  
// console.log(2<1); 
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);   

console.log("2">1); // outPut=true 
console.log("02">1); // outPut=true

console.log(null>0) // outPut=false
console.log(null==0) // outPut=false
console.log(null>=0) // outPut=true


console.log(undefined>0) // outPut=false
console.log(undefined==0) // outPut=false
console.log(undefined>=0) // outPut=false

// ===  -> check number and data type
console.log("2" === 2);


// the reason is that an  equality chaeck == and comparisons > < >= <= work differenty

// comparisons convert null to number, treating it as 0. that's why (3) null >=0 is true and (1) null > 0 is false.