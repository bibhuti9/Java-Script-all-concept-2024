const  coding = ["js","ruby","java","c","cpp","py"];

coding.forEach(function (item) {
    // console.log(item)
})


coding.forEach( (item)=>{
//  console.log(item)
})

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)


coding.forEach((item,Index,arr)=>{
    // console.log(item,Index,arr);
})
/* 
   output:- 
            js 0 [ 'js', 'ruby', 'java', 'c', 'cpp', 'py' ]
            ruby 1 [ 'js', 'ruby', 'java', 'c', 'cpp', 'py' ]
            java 2 [ 'js', 'ruby', 'java', 'c', 'cpp', 'py' ]
            c 3 [ 'js', 'ruby', 'java', 'c', 'cpp', 'py' ]
            cpp 4 [ 'js', 'ruby', 'java', 'c', 'cpp', 'py' ]
            py 5 [ 'js', 'ruby', 'java', 'c', 'cpp', 'py' ]
*/



const myCoding = [
    {
        languageName:"JavaScript",
        languageFileName:"js"
    },
    {
        languageName:"Pytho",
        languageFileName:"py"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName}  and fileName  :-${item.languageFileName}`);
    // console.log(item.languageName);
})