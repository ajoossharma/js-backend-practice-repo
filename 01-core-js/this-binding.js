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

