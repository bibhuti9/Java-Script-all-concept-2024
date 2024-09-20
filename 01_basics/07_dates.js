// Dates
let myDate = new Date();
console.log(myDate);
  //output = 2024-09-20T07:30:48.493Z
 console.log(myDate.toString());
     //output = Fri Sep 20 2024 07:30:48 GMT+0000 (Coordinated Universal Time)
 console.log(myDate.toDateString()) 
     // output : Fri Sep 20 2024
 console.log(myDate.toISOString())
     // output : 2024-09-20T07:34:10.344Z
 console.log(myDate.toJSON())   
    // output : 2024-09-20T07:34:10.344Z
 console.log(myDate.toLocaleDateString())
      // output : 9/20/2024
 console.log(myDate.toLocaleString())
     // output : 9/20/2024, 7:34:10 AM
 console.log(myDate.toLocaleTimeString())
     // output : 7:34:10 AM

 console.log(typeof myDate); // object


let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());
let myCreatedDateNew = new Date(2023,0,23,5,3)
console.log(myCreatedDateNew.toLocaleString());
// start month = 0 and last month = 11 in date funcation using single value

let myCreatedDate1 = new Date("2021-01-14") // yy-mm-dd
console.log(myCreatedDate1.toLocaleString());
let myCreatedDate2 = new Date("01-14-2023") //mm-dd-yy
console.log(myCreatedDate2.toLocaleString());
// start month = 01 and last month = 12 in date funcation using dobule value

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime()); 
    //millisecond value
console.log(Math.floor(Date.now()/1000));



let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate()+1);
console.log(newDate.getMonth());

let date = newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(date);

