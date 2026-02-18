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
console.log(a + b);
//50 pehle print hua kyunki it is a async function and async function tha toh wait nhi kia usne 



//await never returns a promise it pauses the execution of the async function 
// and keeps it paused till it gets the resolved promise and returns value from the resolved promise 

//now writing promises the rawdogging way

//better to write using syntax sugar (the above)


fetch("https://jsonplaceholder.typicode.com/posts")
//if this promise is resolved then .then() runs 
.then((data) => 
    {console.log(data)
    })
    //if any error aajati hai then .catch( executes)
.catch((error) =>{
    console.log(error)
})
//regardless error aayi ho ya successfully chala ho 
//error har baar aata hi aata hai 
.finally()

/*
Yes ✔
.then(), .catch(), .finally() are higher-order functions.

If you don’t pass a function:

Promise methods just ignore it

They forward the value/error unchanged

No crash occurs
*/