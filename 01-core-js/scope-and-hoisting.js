//hoisiting for normal functions aise hota hai 

hellomaguire();

function hellomaguire() {
    console.log(" Hello Maguire")
}

//ab isse kahete hai hoisting function define karne se pehle hi call kar sakte hai kyunki 
//js saare functions ko pehle hoist krleta hai then compiles the code

//but hoisting does not work for arrow functions


const Ayush = {};

//because if const we cannot keep that variable empty 

let bisleri;
var cocacola;

//is fine

//const, let, var are used with variables and define scope and assignment scene
//let, var allow reassignment but have different scope properties


function barcelona() {
    if (true) {
        var hehe = 10;
    }
    console.log(hehe); //this will not give error 
    //because var poore function mei available hota hai in which it is declared
}

function paris() {
    if (true) {
        let gg = 22;
    }
    console.log(gg); //this will give error because let is block scoped only inside {}
}


//var is hoisted AND is initialized as undefined 
//so this will not give error
console.log(a); //this will give undefined 
var a = 77;

//this will give reference error
//let is hoisted but not initialized 
console.log(b);
let b = 10;

//and const is also block scoped but does not allow reassignment 


//const, let, var all 3 are hoisted but let, const are not initialized so they give referenceerror
//and var will give undefined because it is hoisted and INTITALIZED with undefined 

