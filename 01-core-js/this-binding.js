//for normal functions 
//this depends on how the function is called
//plain function call function() no this involved

/*This is a plain function call.

So:

In non-strict mode → this = window (browser)

In strict mode → this = undefined
*/


//and for arrow functions they take from the neighbour


//normal functions have their own this
//arrow functions borrow this from the neighbouring scope 
/*if no neighbouring scope then undefined(strict module)
window (browser)
*/

//writint a normal function inside an object

const Player = {
    name: "Ayush",
     manunited() {
        console.log(this);
    },
}


//now because manunited() here is a normal function this === Player 
//now problem and will print Player
Player.manunited();

const Goalkeeper = {
    name: "Donnaruma", 
    mancity: () => {
        console.log(this)
    }
}

Goalkeeper.mancity()

//this will give an error because mancity is an arrow function //could not bind it's this to anyone 


//more examples and more to the point defintion 

//in this file we are mainly coding the difference between arrow function and normal function and the biggest difference is this binding only 

/*
const obj = {

    name: "John",

    function ajoos(a, b) {
        console.log("ajoos");
    },

    const another = ()=> {
        console.log("laptop");
    }
};
*/

//we only define properties, methods inside an object literal {} 
// we don't define variables inside an object literal {}
/*
const obj = {
  const x = 5,          // ❌
  let y = 10,           // ❌
  var z = 15,           // ❌
  function test() {}    // ❌ (this style)
};
*/

//correct example 
const obj7 = {
  name: "John",        // property
  age: 25,             // property

  greet() {            // method
    console.log("Hi");
  }
};



//Allowed ways 

const obj2 = {
    testy() {
        console.log("Hello");
    }
}

const obj3 = {
    testy : function() {
        console.log("Hello");
    }
}

const obj4 = {
    testy : ()=> {
        console.log("hello");
    }
}

//because inside an object we only do 
//key : value


