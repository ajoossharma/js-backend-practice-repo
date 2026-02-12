function add(a, b, cb) {
    let result = a + b;
    cb(result);
}

add(2, 4, function hello(val) {
    console.log(val);
});


//even cleaner way

function bisleri(a, b, pepsi) {
    let result = a*b*pepsi(5);
    console.log(result);
}

function pepsi(c) {
    return c*100;
}

bisleri(2, 4, pepsi);

//we have 2 options only (2 only right ?) either 
// call the function from the call only or just pass the function and let the higher order call it inside

//we can pass an arrow function without the 

//we can also return a function 

function mouse(a, b, cb) {
    let result = a + b;

    return (result) => {
        console.log(result);
    }
}

const keyboard = mouse(4, 2, undefined);

return keyboard(17);
//dekh dhyaan se a + b hua hi nhi idhar mosue ne ek function return kia joki takes result and console.log(result);
//samajh gya hu 