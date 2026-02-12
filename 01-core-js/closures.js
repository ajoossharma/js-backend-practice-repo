//normal functions
function add(a, b) {
    return a + b;
}

//arguement keyword only works for 
//normal functions, not for arrow functions




//arrow functions

const add = (a, b) => {
    return a + b;
}

//yeh only tab use krte hai jab ek hi line ho toh return kna ho, otherwise use curly braces and return statement
const addV2 = (a, b) => a + b;

const addV3 = a => b => a + b;