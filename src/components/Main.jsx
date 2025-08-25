import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import "../blocks/Main.css";

function Main({ clothingItems, handleOpenItemModal }) {
  return (
    <main className="main">
      <WeatherCard />
      <p className="main__text">Today is 75° F / You may want to wear:</p>
      <ul className="main__card-list">
        {clothingItems.map((item) => {
          return <ItemCard key={item._id} data={item} onCardClick={handleOpenItemModal} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
