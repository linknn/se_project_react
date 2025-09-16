import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Profile from "./Profile";
import ItemModal from "./ItemModal";
import AddItemModal from "./AddItemModal";

// import { defaultClothingItems } from "../utils/defaultClothingItems";
import { getWeatherData } from "../utils/weatherApi";
import { addItem, getItems, deleteItem } from "../utils/api";
import CurrentTemperatureUnitContext from "../utils/CurrentTemperatureUnitContext";

function App() {
  //Save as state (useState)
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [weatherData, setWeatherData] = useState({ name: "", temp: "0" });
  const [currentTempUnit, setCurrentTempUnit] = useState("F");

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleOpenClothesModal() {
    setActiveModal("add-clothes-modal");
  }

  function handleMobileOpenMenu() {
    setActiveModal("mobile-nav-modal");
  }

  function handleCloseModal() {
    setActiveModal("");
  }

  // esc key close modal
  useEffect(() => {
    function handleEscKeyDown(evt) {
      if (evt.key === "Escape" || evt?.key === "Esc") {
        setActiveModal("");
      }
    }
    document.addEventListener("keydown", handleEscKeyDown);
    return () => document.removeEventListener("keydown", handleEscKeyDown);
  }, []);

  function handleTempUnitChange() {
    if (currentTempUnit == "F") {
      setCurrentTempUnit("C");
    } else {
      setCurrentTempUnit("F");
    }
  }

  function handleAddItemSubmit(inputValues, handleReset) {
    console.log(inputValues);
    return addItem(inputValues)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleReset();
      })
      .catch(console.error);
  }

  function handleDeleteItem() {
    console.log(selectedCard);
    return deleteItem(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((clothingItem) => clothingItem._id !== selectedCard._id)
        );
      })
      .catch(console.error);
  }

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items.reverse());
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTempUnit, handleTempUnitChange }}>
      <div className="app">
        <Header
          weatherData={weatherData}
          handleOpenClothesModal={handleOpenClothesModal}
          isOpen={activeModal === "mobile-nav-modal"}
          handleMobileOpenMenu={handleMobileOpenMenu}
          handleCloseModal={handleCloseModal}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                weatherData={weatherData}
                clothingItems={clothingItems}
                handleOpenItemModal={handleOpenItemModal}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                clothingItems={clothingItems}
                handleOpenClothesModal={handleOpenClothesModal}
                handleOpenItemModal={handleOpenItemModal}
              />
            }
          />
        </Routes>
        <Footer />
        <AddItemModal
          isOpen={activeModal === "add-clothes-modal"}
          onClose={handleCloseModal}
          handleAddItemSubmit={handleAddItemSubmit}
          // handleReset={handleReset}
        />
        <ItemModal
          card={selectedCard}
          isOpen={activeModal === "item-modal"}
          handleDeleteItem={handleDeleteItem}
          onClose={handleCloseModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
