import fetchWeatherData from "./api.js";
import { updateUI } from "./ui.js";

// HTML elemanlarını seçme -
const selectors = {
  city: document.querySelector(".weather-city"),
  datetime: document.querySelector(".weather-datetime"),
  weatherForecast: document.querySelector(".weather-forecast"),
  weatherTemperature: document.querySelector(".weather-temperature"),
  weatherIcon: document.querySelector(".weather-icon"),
  weatherMinMax: document.querySelector(".weather-minmax"),
  weatherRealfeel: document.querySelector(".weather-realfeel"),
  weatherHumidity: document.querySelector(".weather-humidity"),
  weatherWind: document.querySelector(".weather-wind"),
  weatherPressure: document.querySelector(".weather-pressure"),
  searchForm: document.querySelector(".weather-search"),
  searchInput: document.querySelector(".weather-searchform"),
  unitCelsius: document.querySelector(".weather-units-celsius"),
  unitFarenheit: document.querySelector(".weather-units-farenheit"),
  maxTemp: document.getElementById("maxTemp"),
};
// VVarsayılan (Default) sehir ve birim değerlerini atadık.
let currCity = "London";
let units = "metric";
// Hava durumu verilerini API'den alma ve UI'yi güncellemek için asenkron fonksiyonu.
export async function getWeather() {
  const data = await fetchWeatherData(currCity, units);
  // console.log(data);
  updateUI(data, selectors);
}
// Arama (Search) kısmı için olay izleyicisi.
selectors.searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  currCity = selectors.searchInput.value;
  //   console.log(currCity);
  await getWeather();
  selectors.searchInput.value = "";
});
selectors.unitCelsius.addEventListener("click", () => {
  if (units !== "metric") {
    units = "metric";
    getWeather();
  }
});
selectors.unitFarenheit.addEventListener("click", () => {
  if (units !== "imperial") {
    units = "imperial";
    getWeather();
  }
});

document.body.addEventListener("load", async () => {
  await getWeather();
});