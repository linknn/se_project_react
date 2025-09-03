import { useContext } from "react";
import CurrentTemperatureUnitContext from "./CurrentTemperatureUnitContext";
import cloudy from "../images/cloudy.png";

function WeatherCard({ weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather-card">
      <img src={cloudy} alt="Cloudy weather" className="weather-card__image" />
      <p className="weather-card__temp">
        {weatherData.temp[currentTempUnit]}&deg; {currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
