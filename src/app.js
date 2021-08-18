function Search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");

  cityElement.innerHTML = cityInput.value;

  let apiKey = "3a3f0183203cd25f32e5e40604f19192";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", Search);

//

function showTemperature(response) {
  console.log(response.data);

  let degrees = Math.round(response.data.main.temp);
  let degreesElement = document.querySelector("#degrees");
  degreesElement.innerHTML = `${degrees}`;

  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;

  let description = response.data.weather[0].main;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = `${description}`;

  let wind = response.data.wind.speed;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `Wind: ${wind}`;

  let humidity = response.data.main.humidity;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `Humidity: ${humidity}%`;

  let apiKey = "3a3f0183203cd25f32e5e40604f19192";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

//

function handlePosition(position) {
  let apiKey = "3a3f0183203cd25f32e5e40604f19192";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function findPosition(event) {
  event.preventDefault();

  let currentLocationButton = document.querySelector("button");
  currentLocationButton.innerHTML = `${handlePosition}`;

  navigator.geolocation.getCurrentPosition(handlePosition);
}

currentLocationButton.addEventListener("click", Submit);

//

let now = new Date();

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let h3 = document.querySelector("h3");
h3.innerHTML = `${day}, ${date} ${hour}:${minutes}`;
