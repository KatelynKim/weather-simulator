import Rain from "../particles/Rain.js";
import Snow from "../particles/snow.js";

export const createParticleArray = (weatherData, ctx) => {
  const { rain, snow, wind } = weatherData;
  let particleArray = [];
  let numberOfParticles;
  let defaultNumberOfParticles = 300
  if (rain) {
    numberOfParticles = rain["1h"] || defaultNumberOfParticles;
    for (let i = 0; i < numberOfParticles * 50; i++) {
      let x = Math.random() * innerWidth;
      let y = Math.random() * innerHeight;
      let dx = wind.speed * 0.5;
      let dy = 3;
      let opacity = Math.random();
      particleArray.push(new Rain(x, y, dx, dy, opacity, ctx));
    }
  } else if (snow) {
    numberOfParticles = snow["1h"] || defaultNumberOfParticles;
    for (let i = 0; i < numberOfParticles; i++) {
      let x = Math.random() * innerWidth;
      let y = Math.random() * innerHeight;
      let dx = wind.speed * 0.1;
      let dy = Math.random() * (0.3, 0.2) + 0.2;
      let radius = Math.random() * 20;
      let opacity = Math.random();
      particleArray.push(new Snow(x, y, dx, dy, radius, opacity, ctx));
    }
  } else {
    console.log("it neither rained nor snowed today");
  }
  return particleArray;
};
