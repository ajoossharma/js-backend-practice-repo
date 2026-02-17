//we cannot use await without async 
//we can only use await with async funciton only 

//for an example 

let a = 23;
let b = 27;

let resultFromserver = await fetch("https://jsonplaceholder.typicode.com/posts");

console.log(resultFromserver);