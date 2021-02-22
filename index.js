let image = document.querySelector('img')
let figcaption  = document.querySelector('figcaption');
let title_image = document.querySelector('h2');
let date_image  = document.querySelector('.container > p');

async function fetchData(url) {
    let response = await fetch(url);
    return response.json();
}

(async function getData() {
    let data = await fetchData("https://api.nasa.gov/planetary/apod?api_key=R3pI5mc6OJT1N54QTJrvBbPJCGbnpnHNHZfx0ZNW")
    console.log(data);
    let date   = data.date;
    let desc   = data.explanation;
    let images = data.hdurl;
    title_image.textContent = data.title;
    figcaption.textContent = desc;
    image.src = images;
    date_image.textContent = date;
})();