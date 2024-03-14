const fs = require('fs');

fs.promises.readFile('./message.txt', {encoding: 'UTF-8'})
    .then((dataFirstRead) => {
        console.log(dataFirstRead);
        const newData = dataFirstRead + "\nExtra line.";
        return fs.promises.writeFile('./copy.txt', newData, {encoding: 'UTF-8'});
    })
    .then(() => {
        console.log("Your file was created and successfully updated!");
        return fs.promises.readFile('./copy.txt', {encoding: 'UTF-8'});
    })
    .then((dataSecondRead) => {
        console.log(dataSecondRead);
    })
    .catch((error) => {
        console.log(error);
    });