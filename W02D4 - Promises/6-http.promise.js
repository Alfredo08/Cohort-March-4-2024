const requestPromise = require('request-promise');

const settings = {
    uri: "https://jsonplaceholder.typicode.com/posts",
    json: true
}

requestPromise(settings)
    .then((responseJSON) => {
        responseJSON.forEach((object) => {
            console.log(object.id, object.title);
        });
    })
    .catch((error) => {
        console.log(error);
    });