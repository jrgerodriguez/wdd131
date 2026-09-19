//Get current year
const currentYear = new Date().getFullYear();
const firstFooterPar = document.querySelector("#currentyear");
firstFooterPar.innerHTML = currentYear;

//Get last modified
document.getElementById("lastModified").innerHTML = document.lastModified;

//Static weather values (must match the values shown in the Weather section)
const temperature = 8; // °C
const windSpeed = 13; // km/h

//Wind chill factor (metric formula: temperature in °C, wind speed in km/h)
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

//Only valid when temperature <= 10 °C and wind speed > 4.8 km/h
let windChill = "N/A";
if (temperature <= 10 && windSpeed > 4.8) {
    windChill = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
}

document.getElementById("windchill").innerHTML = windChill;
