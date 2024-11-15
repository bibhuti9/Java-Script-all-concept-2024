// map funcation return the value
const myNum = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNum.map((num)=>num+10)
    console.log(newNums);

const newNums1 = myNum.map((num)=>{ return num+10})
    console.log(newNums1);
/*
output:[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
] 
  */
const newNum = myNum
                .map((num)=>num*10)
                .map((num)=>num+1)
console.log(newNum);
// output :- [ 11, 21, 31, 41,  51, 61, 71, 81, 91, 101  ]

const newNo = myNum
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>{ return num >= 40})
console.log(newNo);
/* output: [ 41, 51,  61, 71, 81, 91, 101]*/