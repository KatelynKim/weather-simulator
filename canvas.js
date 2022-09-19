import fetchWeather from "./helpers/fetch-weather.js";
import { createParticleArray } from "./helpers/create-particle-array.js";

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const weatherData = await fetchWeather();
const particleArray = createParticleArray(weatherData, ctx);

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (const element of particleArray) {
    element.update();
  }
}

animate();
