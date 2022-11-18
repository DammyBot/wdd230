// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// URL and container
const url = "https://api.openweathermap.org/data/3.0/onecall?lat=64.8401&lon=147.7200&exclude=daily,hourly&appid=15b3c845efce804c56e0ccf9cfedc22f"
let details = [];
console.log(details)

// Async function
async function conversion(url){
    const data = await fetch(url);
    if(data.ok){
        const converted = await data.json();
        details = converted
        // console.log(details);
        console.log(details.current.weather[0]);
        displayResults(details.current);
    }
}

function displayResults(data){
    const temp = parseInt(data.temp);
    const cel = (temp - 273.15) * 9/5 + 32;
    const fara = (cel * 9/5) + 32

    const image = data.weather[0].icon;
    const imgUrl = `https://openweathermap.org/img/w/${image}.png`
    const description = data.weather[0].description;
    weatherIcon.setAttribute("src",imgUrl);
    weatherIcon.setAttribute("alt",description);
    captionDesc.textContent = description;


    currentTemp.textContent = fara.toFixed(2);
}

conversion(url);