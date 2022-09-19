import Rain from "../particles/Rain.js";

export const createParticleArray = (weatherData, ctx) => {
  const { rain, snow, wind } = weatherData;
  let particleArray = [];
  let numberOfParticles;
  if (rain) {
    numberOfParticles = rain["1h"];
    console.log("it rained in ur city");
    for (let i = 0; i < numberOfParticles * 50; i++) {
      let x = Math.random() * innerWidth;
      let y = Math.random() * innerHeight;
      let dx = wind.speed * 0.5;
      let dy = 3;
      let opacity = Math.random();
      particleArray.push(new Rain(x, y, dx, dy, opacity, ctx));
    }
  } else if (snow) {
    console.log("it snowed in ur city");
    for (let i = 0; i < 300; i++) {
      let x = Math.random() * innerWidth;
      let y = Math.random() * innerHeight;
      let dx = wind.speed * 0.5;
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
