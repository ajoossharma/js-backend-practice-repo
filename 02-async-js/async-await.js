//we cannot use await without async 
//we can only use await with async funciton only 

//for an example 


let a = 23;
let b = 27;
const getData = async () => {
    let resultFromserver =  await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(resultFromserver)
}


getData();



//await never returns a promise it pauses the execution of the async function 
// and keeps it paused till it gets the resolved promise and returns value from the resolved promise 