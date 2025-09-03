const coordinates = { lat: "47.734276", lon: "-122.243836" };
const apiKey = "e8b8b752a34b04830703b544046d7aa7";

const weatherConditionImages = {
  day: {
    default: {
      alt: "default",
      image: new URL("../images/day/default.png", import.meta.url).href,
    },
    clear: {
      alt: "clear",
      image: new URL("../images/day/clear_day.png", import.meta.url).href,
    },
    clouds: { alt: "cloudy", image: new URL("../images/day/cloudy_day.png", import.meta.url).href },
    fog: { alt: "fog", image: new URL("../images/day/fog_day.png", import.meta.url).href },
    rain: { alt: "rain", image: new URL("../images/day/rain_day.png", import.meta.url).href },
    snow: { alt: "snow", image: new URL("../images/day/snow_day.png", import.meta.url).href },
    storm: { alt: "storm", image: new URL("../images/day/storm_day.png", import.meta.url).href },
  },
  night: {
    default: {
      alt: "default",
      image: new URL("../images/night/default.png", import.meta.url).href,
    },
    clear: {
      alt: "clear",
      image: new URL("../images/night/clear_night.png", import.meta.url).href,
    },
    clouds: {
      alt: "cloudy",
      image: new URL("../images/night/cloudy_night.png", import.meta.url).href,
    },
    fog: { alt: "fog", image: new URL("../images/night/fog_night.png", import.meta.url).href },
    rain: { alt: "rain", image: new URL("../images/night/rain_night.png", import.meta.url).href },
    snow: { alt: "snow", image: new URL("../images/night/snow_night.png", import.meta.url).href },
    storm: {
      alt: "storm",
      image: new URL("../images/night/storm_night.png", import.meta.url).href,
    },
  },
};

export { apiKey, coordinates, weatherConditionImages };
