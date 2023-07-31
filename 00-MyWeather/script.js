// Weather API - https://openweathermap.org/

const apiKey = "6454ef82c5ac903745048706b6045dd3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weathericon = document.querySelector(".weather-icon");
const weatherCard = document.querySelector(".weather");
const errorDisplay = document.querySelector(".error");

const getWeatherdata = async (city) => {
  const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (res.status === 404) {
    errorDisplay.style.display = "block";
    weatherCard.style.display = "none";
    return;
  }
  const data = await res.json();
  applyWeatherData(data);
};

const applyWeatherData = (data) => {
  cityName.innerHTML = data.name;
  temperature.innerHTML = Math.round(data.main.temp) + "°c";
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";
  weathericon.src = `images/${data.weather[0].main}.png`;
  weatherCard.style.display = "block";
  errorDisplay.style.display = "none";
};

searchBtn.addEventListener("click", () => {
  const citySearch = searchBox.value;
  getWeatherdata(citySearch);
});
