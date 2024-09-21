const marval_heros =["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
 marval_heros.push(dc_heros); //  return existing array
console.log(marval_heros)
 //output: [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marval_heros[3]); // get array value
    marval_heros.concat(dc_heros);
    console.log(marval_heros)
    //output: [ 'thor', 'ironman', 'spiderman' ]
const allHeros = marval_heros.concat(dc_heros); 
    // return new array  use 'concat'
    console.log(allHeros)
    //output: [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros = [...marval_heros,...dc_heros];
     console.log("Spread Operator =",all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
    console.log("flat use = ",real_another_array);
    
console.log(Array.isArray("Balram"));
    // check the it is array and not array
console.log(Array.from("Balram")); 
    // convert string to array
console.log(Array.from({name:"balram"}));// output: []

let a = 10;
let b = 20;
let c = 30;

console.log(Array.of(a,b,c)); // output = [ 10, 20, 30 ]