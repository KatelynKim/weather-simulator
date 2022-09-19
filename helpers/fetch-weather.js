import { getCurrLocation } from "./get-curr-location.js";

export default async function fetchWeather() {
  const { lat, long } = await getCurrLocation().then((location) => location);

  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=57052ffff5e8980041faacb90c828350`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
