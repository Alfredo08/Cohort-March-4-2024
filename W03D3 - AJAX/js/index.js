

const dogForm = document.querySelector('.dog-form');

// Async/Await syntax
/*
dogForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const numberOfDogs = document.querySelector('#number-of-dogs').value;

    const URL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
    
    const settings = {
        method: 'GET',
    };

    const response = await fetch(URL, settings);
    // Validate if it's a successful reponse
    const data = await response.json();
    
    const dogResults = document.querySelector('.dog-results');
    dogResults.innerHTML = "";

    data.message.forEach((dogImage) => {
        dogResults.innerHTML += `<img src="${dogImage}" alt="Dog image" />`;
    });
});
*/

// Regular Fetch with .then() promises
/*
dogForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const numberOfDogs = document.querySelector('#number-of-dogs').value;

    const URL = `https://dog.ceo/api/breeds/image/random/${numberOfDogs}`;
    
    const settings = {
        method: 'GET',
    };

    fetch(URL, settings)
        .then((response) => {
            if(response.ok){
                return response.json();
            }
            return new Error("Something went wrong");
        })
        .then((data) => {
            const dogResults = document.querySelector('.dog-results');
            dogResults.innerHTML = "";
            
            data.message.forEach((dogImage) => {
                dogResults.innerHTML += `<img class="dogImage" src="${dogImage}" alt="Dog image" />`;
            });
        })
        .catch((error) => {
            console.log(error);
        });
});
*/

$('.dog-form').on('submit', (event) => {
    event.preventDefault();

    const $numOfDogs = $('#number-of-dogs').val();
    const URL = `https://dog.ceo/api/breeds/image/random/${$numOfDogs}`;

    $.get(URL, (data) => {
        $('.dog-results').empty();
        
        data.message.forEach((dogImage) => {
            $('.dog-results').append(`<img class="dogImage" src="${dogImage}" alt="Dog image" />`);
        });
    })
    .fail((error) => {
        console.log(error);
    });
});

// Success and fail key-value pairs inside $.ajax()
/*
$('.news-form').on('submit', (event) => {
    event.preventDefault();
    const $searchTerm = $('#search-term').val();
    const URL = "https://newsapi.org/v2/everything";
    const API_KEY = "PLACE_YOUR_API_KEY_HERE";

    $.ajax({
        method: 'GET',
        url: URL,
        data: {
            q: $searchTerm,
            pageSize: 10
        },
        headers:{
            'x-api-key': API_KEY
        },
        success: (data) => {
            $('.news-results').empty();

            data.articles.forEach((article) => {
                $('.news-results').append(`
                    <div class="article">
                        <h3> ${article.title} </h3>
                        <div>
                            <img src="${article.urlToImage}" alt="News image"/>
                        </div>
                        <p> ${article.author} </p>
                        <p> ${article.description} </p>
                        <a href="${article.url}" target="_blank"> Full article </a>
                    </div>
                `);
            });

            if(data.articles.length === 0){
                $('.news-results').html('<p> No results with your search criteria </p>');
            }
        },
        fail: (error) => {
            console.log(error);
        }
    });
});
*/

// Using the callback promise .done()
$('.news-form').on('submit', (event) => {
    event.preventDefault();
    const $searchTerm = $('#search-term').val();
    const URL = "https://newsapi.org/v2/everything";
    const API_KEY = "e993fe0805de4ec0abaff5d967e9302a";

    $.ajax({
        method: 'GET',
        url: URL,
        data: {
            q: $searchTerm,
            pageSize: 10
        },
        headers:{
            'x-api-key': API_KEY
        }
    })
    .done((data) => {
        $('.news-results').empty();

        data.articles.forEach((article) => {
            $('.news-results').append(`
                <div class="article">
                    <h3> ${article.title} </h3>
                    <div>
                        <img src="${article.urlToImage}" alt="News image"/>
                    </div>
                    <p> ${article.author} </p>
                    <p> ${article.description} </p>
                    <a href="${article.url}" target="_blank"> Full article </a>
                </div>
            `);
        });

        if(data.articles.length === 0){
            $('.news-results').html('<p> No results with your search criteria </p>');
        }
    })
    .fail((error) => {
        console.log(error);
    });
});