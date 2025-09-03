import { apiKey, coordinates } from "./constants";

export function getWeatherData() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${apiKey}`
  )
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error from weather API: ${res.status}`);
    })
    .then((data) => {
      return parseWeatherData(data);
    });
}

function parseWeatherData(data) {
  const parsedData = { temp: {} };

  parsedData.city = data.name;
  parsedData.temp.F = Math.round(data.main.temp);
  parsedData.temp.C = Math.round(((parsedData.temp.F - 32) * 5) / 9);

  parsedData.weatherCondition = data.weather[0].main.toLowerCase();
  // parsedData.weatherCondition = "drizzle";

  parsedData.isDay = isDay(data.sys, data.dt);

  return parsedData;
}

function isDay({ sunrise, sunset }, timeStamp) {
  // const timeStampInSeconds = 1000 * timeStamp;
  const current = timeStamp > 1e12 ? Math.floor(timeStamp / 1000) : timeStamp;
  return sunrise < current && current < sunset;
}

// TODO - Write a getWeatherCondition() function that accepts a temperature in Fahrenheit and returns:

// "hot" if it is at least 86 degrees
// "warm" if it is at least 66 degrees, but less than 86
// "cold" otherwise
// should look something like this
//  if (temperature >= 86) {
//    return 'hot';
//  } else if (temperature >= 66) {
//    return 'warm';
//  } else {
//    return 'cold';
//  }
