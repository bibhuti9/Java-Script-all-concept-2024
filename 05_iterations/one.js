// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is Best number");
    }
    console.log(element);
}
// output : 1,2,3,4,5 is Best number,5,6,7,8,9,10


for (let i = 2; i <=10 ; i++) {
    console.log(`Outer Loop Value : ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner Loop Value : ${j} and inner loop ${i} `)
    }
}

// Print Table in 2 to 10;
for (let i = 2; i <=10 ; i++) {
        console.log(`Table in : ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}


let myArray  = ['a','b','c','d','e'];
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue


    for (let index = 1; index <= 20; index++) {
        if(index == 5){
            console.log(`Detected ${index}`);
            break;
        }
        console.log(`value of ${index}`);
    }

// output : value of 1 , value of 2, value of 3, value of 4, Detected 5


for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected ${index}`);
        continue
    }
    console.log(`value of ${index}`);
}
//output : value of 1 , value of 2, value of 3, value of 4, Detected 5,value of 6, ... value of 20,
