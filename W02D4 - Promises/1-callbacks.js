
const addTwoNums = (num1, num2, callback) => {
    callback();
    const total = num1 + num2;
    console.log(`The total is sum is ${total}`);
}

const printHello = () => {
    console.log('Hello there class of March 4th, 2024!');
}

// addTwoNums(20, 30, printHello);
console.log("First log");
setTimeout(printHello, 3000);
console.log("Second log");
setTimeout(() => {
    console.log("Third log");
}, 2000);