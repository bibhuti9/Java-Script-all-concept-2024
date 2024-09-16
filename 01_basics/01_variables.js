const accountId = 144553  // Not change The Value
let accountEmail = "Balram@gmail.com" 
var accountPassword = "12345" 
accountCity = "Surat"
let accountState;    //-> dufult value undefined

// accountId = 24  (Not allowed)
/* 
Prefer not to use var 
because of issue in block scope and functional scope 
*/
accountEmail ="bs@gmail.com";
accountCity="odisha";
accountPassword = "234";
console.log(accountId);
/* 
Prefer not to use var 
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);  //Show the table format
