// for of loop

// ["","",""]
//[{},{},{}]


const arr = [1,2,3,4,5]

for (const i of arr) {
    // console.log(i); // output : 1,2,3,4,5
    // console.log(arr);  // output : [ 1, 2, 3, 4, 5 ]  five time print
}


 const greetings  = "Hello World!"
 for (const greet of greetings) {
    // console.log(`Each Char is ${greet}`); 
 }

 //maps
    const map = new Map()
    map.set('IN',"India")
    map.set('USA',"United State Of America")
    map.set('Fr',"France")
    map.set('IN',"India")

    console.log(map);
    
// output :
// Map(3){
//   'IN' => 'India',
//   'USA' => 'United State Of America',
//   'Fr' => 'France'
// }


for (const key of map) {
    console.log(key);
}
// output:
// [ 'IN', 'India' ]
// [ 'USA', 'United State Of America' ]
// [ 'Fr', 'France' ]


for (const [key,value] of map) { // [key,value] = > array discuter
    console.log(`${key} :- ${value}`);
}
// output : - 
    // IN :- India
    // USA :- United State Of America
    // Fr :- France


    // stop time  = 11.39