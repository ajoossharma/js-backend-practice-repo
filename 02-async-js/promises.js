//API calling and promises mainly async-await.js mei hi seekhliye the 

const getData = await (cityName) => {
    const data = await (`.....url.....q=${cityName}....url...`);

    //iske aage bhi await lagaya kyunki .json() also returns a promise 
    return await data.json();
}


//Use of ``
//When we need to do Dynamic interpolation we use ``
