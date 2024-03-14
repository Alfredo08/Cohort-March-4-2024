
const myFirstPromise = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if(randomNum >= 0.5){
        resolve(`Success: The number is greater than 0.5 - ${randomNum}`);
    }
    else{
        reject(`Error: The number is lesser than 0.5 - ${randomNum}`);
    }
});

myFirstPromise
    .then((message) => {
        console.log(message);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });

console.log("This will log first!");