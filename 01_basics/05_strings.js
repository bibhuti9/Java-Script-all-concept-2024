// string Declare in 2 type
    //First
        const name = "Balram"
const repoCount = 50
// console.log(name + repoCount + "value"); // old uses

// String interpolation
// console.log(`Hello my name is ${name} And my repo count is ${repoCount}`);
     // Seconds
const gameName = new String('Balram')
    // console.log(gameName[0]);
    // console.log(gameName.__proto__)
    // console.log(gameName.length);
    // console.log(gameName.toLowerCase());
    // console.log(gameName.toUpperCase());
    // console.log(gameName.charAt(2));
    // console.log(gameName.indexOf('l'));

    // const newString = gameName.substring(0,4);
    // console.log(newString);  // not Use the Negative value
    
    // const anotherString = gameName.slice(-5,3);
    // console.log(anotherString); // Use the Negative value

    // const anotherString1 = gameName.slice(0,3);
    // console.log(anotherString1);
    

    const newStringOne = "       Balram   ";
        console.log(newStringOne);  
        console.log(newStringOne.length)
    const newStringOneLength = newStringOne.trim(); 
        console.log(newStringOneLength);
        console.log(newStringOneLength.length);
       // trim() -> t removes whitespace from both the Starting and ending of a string, returning a new string. 

    const url = "https://balram.com/balram%20panda"
    console.log(url.replace('%20','-'))
    console.log(url.includes('balram')) // true
    console.log(url.includes('Balram')) // flase

    const anotherNameTwo = "balram-panda-com"
    console.log(anotherNameTwo.split('-'));
     // outPut = [ 'balram', 'panda', 'com' ];




