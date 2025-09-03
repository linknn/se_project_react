import { useContext } from "react";
import CurrentTemperatureUnitContext from "./CurrentTemperatureUnitContext";
import cloudy from "../images/cloudy.png";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      {currentTempUnit}
      <img src={cloudy} alt="Cloudy weather" className="weather-card__image" />
      <p className="weather-card__temp">{weatherData.temp}&deg; F</p>
    </section>
  );
}

export default WeatherCard;
