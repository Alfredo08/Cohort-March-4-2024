const fs = require('fs');

fs.readFile('./message.txt', {encoding: 'UTF-8'}, (error, data) => {
    if(error){
        throw Error("Something went wrong" + error);
    }
    else{
        console.log(data);
        const newData = data + "\nExtra line.";
        fs.writeFile('./copy.txt', newData, {encoding: 'UTF-8'}, (errorWrite) => {
            if(errorWrite){
                throw Error("Something went wrong" + errorWrite);
            }
            else{
                console.log("Your file was created and successfully updated!");
                fs.readFile('./copy.txt', {encoding: 'UTF-8'}, (secondReadError, secondReadData) => {
                    if(secondReadError){
                        throw Error("Something went wrong" + secondReadError);
                    }
                    else{
                        console.log(secondReadData);
                    }
                });
            }
        });
    }
});

console.log("First");