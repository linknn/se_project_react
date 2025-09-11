import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Profile from "./Profile";
import ItemModal from "./ItemModal";
import ModalWithForm from "./ModalWithForm";

import { defaultClothingItems } from "../utils/defaultClothingItems";
import { getWeatherData } from "../utils/weatherApi";
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

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    setClothingItems(defaultClothingItems);
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
        <ModalWithForm
          isOpen={activeModal === "add-clothes-modal"}
          title="New garment"
          buttonText="Add garment"
          name="add-clothes-form"
          onClose={handleCloseModal}
        >
          <fieldset className="modal__fieldset">
            <label htmlFor="add-clothes-name" className="modal__label">
              Name
              <input
                id="add-clothes-name"
                type="text"
                className="modal__input"
                placeholder="Name"
              />
            </label>
            <label className="modal__label">
              Image
              <input type="url" className="modal__input" placeholder="Image URL" />
            </label>
          </fieldset>
          <fieldset className="modal__fieldset">
            <legend className="modal__form-legend">Select the weather type:</legend>

            <div>
              <input
                className="modal__radio-btn"
                type="radio"
                id="hot"
                name="weather"
                value="hot"
              />
              <label className="modal__label modal__label_type_radio" htmlFor="hot">
                Hot
              </label>
            </div>

            <div>
              <input
                className="modal__radio-btn"
                type="radio"
                id="warm"
                name="weather"
                value="warm"
              />
              <label className="modal__label modal__label_type_radio" htmlFor="warm">
                Warm
              </label>
            </div>

            <div>
              <input
                className="modal__radio-btn"
                type="radio"
                id="cold"
                name="weather"
                value="cold"
              />
              <label className="modal__label modal__label_type_radio" htmlFor="cold">
                Cold
              </label>
            </div>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          card={selectedCard}
          isOpen={activeModal === "item-modal"}
          onClose={handleCloseModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
