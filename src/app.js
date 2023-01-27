function displayTemperature(response) {
    console.log(response.data);
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement= document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    temperatureElement.innerHTML = Math.round (response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML= response.data.temperature.humidity;
    windElement.innerHTML = Math.round (response.data.wind.speed);
}

let apiKey="0406a2d65ft65fe83b49bc397b79bo2a";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=New-York&key=0406a2d65ft65fe83b49bc397b79bo2a&units=metric`;

axios.get(apiUrl).then(displayTemperature);