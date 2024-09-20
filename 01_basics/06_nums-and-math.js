// const score = 400;
//     console.log(score);
// const balance = new Number(100);
//     console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.8966
//  console.log(otherNumber.toPrecision(3)) // 23.9
// const otherNewNumber = 123.8966
//  console.log(otherNewNumber.toPrecision(3)) // 124  
// const otherNewNumbers = 1123.8966
//  console.log(otherNewNumbers.toPrecision(3))//1.12e+3 
 
// const hundreds = 1000000;
//  console.log(hundreds.toLocaleString('')); // 1,000,000
//  console.log(hundreds.toLocaleString('en-IN'));
    //10,00,000

//++++++++++++++++ Maths +++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2)); // top value output = 5
// console.log(Math.floor(4.9));//lower value output = 4
// console.log(Math.min(4,6,9,3,2,5));
// console.log(Math.max(4,6,9,3,2,5));

console.log(Math.random());//give the value 0 between  1
console.log((Math.random()*10) + 1); // avoid the 0 value then use the plus 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min +1))+min)