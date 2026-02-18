//normal functions
function add(a, b) {
    return a + b;
}

//arguement keyword only works for 
//normal functions, not for arrow functions




//arrow functions

const add4 = (a, b) => {
    return a + b;
}

//yeh only tab use krte hai jab ek hi line ho toh return kna ho, otherwise use curly braces and return statement
const addV2 = (a, b) => a + b;

const addV3 = a => b => a + b;


//CLOSURES

function main() {
    let name = "Ajoos";

    //this is a closuer
    //A closure gives you access to an outer function's scope from an inner function
    function SayMyName() {
        console.log(name);
    }

    //returning a function
    return SayMyName;
}

main();

let fn = main();

//calling the function that was returned by main 
fn();


//practical use case of closure

function adder(num) {

    function add(b) {
        console.log(num + b);
    }

    return add;
}

const addto5 = adder(5);
const addto10 = adder(10);

 addto5(2);
 addto5(10);