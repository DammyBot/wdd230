const temperarture = document.querySelector("#value1");
const windspeed = document.querySelector("#value2");
const windChill = document.querySelector("#windChill");
const logo = document.querySelector("#weatherLogo");
const condition = document.querySelector("#currentCondition");

const url = "https://api.openweathermap.org/data/3.0/onecall?lat=6.465422&lon=3.406448&exclude=daily,hourly&units=metric&appid=15b3c845efce804c56e0ccf9cfedc22f";
let information = [];

async function getinformation(url){
    const data = await fetch(url);
    if(data.ok){
        const conversion = await data.json();
        information = conversion.current;
        console.log(information);
        inputInformation(information);
    }
}

function inputInformation(array){
    temperarture.textContent = array.temp.toFixed(1);
    windspeed.textContent = array.wind_speed.toFixed(1);
    const currentCond = array.weather[0].description;
    console.log(currentCond);
    const camelCase = toCamelcase(currentCond);
    condition.textContent = camelCase;



    const imagenew = array.weather[0].icon;
    const imageUrl = `https://openweathermap.org/img/w/${imagenew}.png`
    logo.setAttribute("src",imageUrl)
    logo.setAttribute("alt",camelCase);
    


    const cel = parseFloat(array.temp);
    const fara = cel * (9/5) + 32;
    const mph = array.wind_speed;

    if (fara <= 50 && mph > 3.0){
        const chillFactor = 35.74 + (0.6215 * fara) - (37.75 * (mph ** 0.16)) + (0.4275 * fara * (mph ** 0.16));
        const conver = chillFactor.toFixed(2);
        document.getElementById("windChill").textContent = conver;
    } else{
        document.getElementById("windChill").textContent = "N/A"
    };
}

function toCamelcase(text){
    const split = text.split("");
    const first = split[0].toUpperCase();
    split.splice(0,1,first);
    const joined = split.join("");
    return joined
}

getinformation(url);