//array
   // -> enables storing a collection of multiple items under a single variable name, and has members for performing common array operations

    //-> JavaScript arrays are resizable and can contain a mix of different data types

    //-> JavaScript arrays are not associative arrays 

    //-> javaScript arrays are zero-indexed

    //-> JavaScript array-copy operations create shallow copies.

    //first type Declaration
const myArr = [0,1,2,3,4,5,true,"balram"];//mixed array
const myArr1 = [0,1,2,3,5];
const myHeors =["shaktiman","naagraj"]
  //second type Declaration
const myArr2 = new Array(1,2,3,4,5)
    // console.log(myArr1[0])

// Array methods
    const myNewArray = [0,1,2,3,5];
     myNewArray.push(6) 
     myNewArray.pop() //only remove the array last value
     myNewArray.unshift(9) //insert the value first index point. output -> [ 9, 0, 1, 2, 3, 5 ]
     myNewArray.shift() //remove the unshift value and  remove the first index value in array 
        //output -> [ 0, 1, 2, 3, 5 ] // unshift
        //output -> [1, 2, 3, 5 ]    // normal array work
      console.log(myNewArray);  
      console.log(myNewArray.includes(5))
      console.log(myNewArray.indexOf(3))
      console.log(myNewArray.indexOf(9)) 
        // output = -1 not use the 9 value

let newArrey = [1,2,3,4,5,6]
    const arrayJoin = newArrey.join();
        console.log(newArrey)//output:[ 1, 2, 3, 4, 5, 6 ]
        console.log(typeof newArrey)  // tyep : object
        console.log(arrayJoin) //output:1,2,3,4,5,6
        console.log(typeof arrayJoin) //tyep : string

// slice , splice
let newArrey1 = [0,1,2,3,4,5]
console.log("A ",newArrey1); 
    //output : A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = newArrey1.slice(1,3)//Not Manipulate the original array using the splice Method
console.log(myn1); 
    // output [ 1, 2 ]
console.log("B ",newArrey1)
    // Output : B  [ 0, 1, 2, 3, 4, 5 ]
const myn2 = newArrey1.splice(1,3) // Manipulate the original array using the  splice Method
console.log("C ",newArrey1)
    // output : C  [ 0, 4, 5 ]
console.log(myn2);
    // Output : [ 1, 2, 3 ] 
console.log("C ",newArrey1)
    // output : C  [ 0, 4, 5 ]
