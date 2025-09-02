import cloudy from "../images/cloudy.png";

function WeatherCard({ weatherData }) {
  return (
    <section className="weather-card">
      <img src={cloudy} alt="Cloudy weather" className="weather-card__image" />
      <p className="weather-card__temp">{weatherData.temp}&deg; F</p>
    </section>
  );
}

export default WeatherCard;
