import { useContext } from "react";
import CurrentTemperatureUnitContext from "./CurrentTemperatureUnitContext";

import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main({ clothingItems, handleOpenItemModal, weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <p className="main__text">
        Today is {weatherData.temp[currentTempUnit]}° {currentTempUnit} / You may want to wear:
      </p>
      <ul className="main__card-list">
        {clothingItems.map((item) => {
          return <ItemCard key={item._id} data={item} onCardClick={handleOpenItemModal} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
