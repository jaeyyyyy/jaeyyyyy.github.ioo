const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:nth-child(2)");
const API_KEY = "402df5e305866bedef47297cbf828ce2";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weatherIconCode = data.weather[0].icon;
            const weatherIcon = document.createElement("img");
            weatherIcon.src = `img/icons/${weatherIconCode}.png`;
            city.innerText = data.name;
            weather.innerText = `| ${data.main.temp}°C | ${data.weather[0].main}`;
            weather.appendChild(weatherIcon);
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
