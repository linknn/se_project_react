import { useContext } from "react";
import CurrentTemperatureUnitContext from "../utils/CurrentTemperatureUnitContext.js";

import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

import getWeatherCondition from "../utils/weatherApi.js";

function Main({ clothingItems, handleOpenItemModal, weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherCondition = getWeatherCondition(weatherData.temp.F);
  const filteredCards = clothingItems.filter((item) => item.weather === weatherCondition);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp[currentTempUnit]}° {currentTempUnit} / You may want to wear:
      </p>
      <ul className="card-list">
        {filteredCards.map((item) => {
          return <ItemCard key={item._id} data={item} onCardClick={handleOpenItemModal} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
