import { useContext } from "react";

import CurrentTemperatureUnitContext from "../utils/CurrentTemperatureUnitContext";

import { weatherConditionImages } from "../utils/constants";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);
  const conditionData =
    weatherConditionImages[weatherData.isDay ? "day" : "night"][weatherData.weatherCondition] ||
    weatherConditionImages[weatherData.isDay ? "day" : "night"]["default"];

  return (
    <section className="weather-card">
      <img
        src={conditionData.image}
        alt={`${conditionData.alt} weather`}
        className="weather-card__image"
      />
      <p className="weather-card__temp">
        {weatherData.temp[currentTempUnit]}&deg; {currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
