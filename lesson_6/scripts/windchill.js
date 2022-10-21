const temperature = document.getElementById("value1").textContent;
const windSpeed = document.getElementById("value2").textContent;

const fara = (1.8 * temperature) + 32;
const mph = windSpeed * 1000;

// const fara = 15;
// const mph = 5;

if (fara <= 50 && mph > 3.0){
    const chillFactor = 35.74 + (0.6215 * fara) - (37.75 * (mph ** 0.16)) + (0.4275 * fara * (mph ** 0.16));
    const conver = chillFactor.toFixed(2);
    document.getElementById("windChill").textContent = conver;
} else{
    document.getElementById("windChill").textContent = "N/A"
};