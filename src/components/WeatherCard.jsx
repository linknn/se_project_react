import cloudy from "../images/cloudy.png";
import "../blocks/WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather-card">
      <img src={cloudy} alt="Cloudy weather" className="weather-card__image" />
      <p className="weather-card__temp">75&deg; F</p>
    </section>
  );
}

export default WeatherCard;
