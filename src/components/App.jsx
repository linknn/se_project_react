import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Profile from "./Profile";
import ItemModal from "./ItemModal";
import AddItemModal from "./AddItemModal";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";

import ProtectedRoute from "./ProtectedRoute";

import { signup, signin, getUser } from "../utils/auth";

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
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  function handleOpenItemModal(card) {
    setActiveModal("item-modal");
    setSelectedCard(card);
  }

  function handleOpenClothesModal() {
    setActiveModal("add-clothes-modal");
  }

  function handleOpenRegisterModal() {
    setActiveModal("register-modal");
  }

  function handleOpenLoginModal() {
    setActiveModal("login-modal");
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
    const token = localStorage.getItem("jwt");

    return addItem(inputValues, token)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleReset();
      })
      .catch(console.error);
  }

  function handleDeleteItem() {
    console.log(selectedCard);
    const token = localStorage.getItem("jwt");

    return deleteItem(selectedCard._id, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((clothingItem) => clothingItem._id !== selectedCard._id)
        );
      })
      .catch(console.error);
  }

  function handleRegisterSubmit(formValues) {
    signup(formValues)
      .then(() => {
        // successful signup/auto-login
        return signin({ email: formValues.email, password: formValues.password });
      })
      .then((res) => {
        // save token
        localStorage.setItem("jwt", res.token);

        handleCloseModal();
      })
      .catch((err) => {
        console.error("Registration error:", err);
      });
  }

  function handleLoginSubmit({ email, password }) {
    signin({ email, password })
      .then((res) => {
        localStorage.setItem("jwt", res.token);

        return getUser(res.token);
      })
      .then((userData) => {
        setLoggedIn(true);
        setCurrentUser(userData);
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
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
      .then((data) => {
        setClothingItems(data.reverse());
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");

    if (!token) return;

    getUser(token)
      .then((user) => {
        setCurrentUser(user);
        setLoggedIn(true);
      })

      .catch((err) => {
        console.error("Invalid token:", err);
        localStorage.removeItem("jwt");
        setLoggedIn(false);
        setCurrentUser(null);
      });
  }, []);

  return (
    <CurrentTemperatureUnitContext.Provider value={{ currentTempUnit, handleTempUnitChange }}>
      <div className="app">
        <Header
          weatherData={weatherData}
          handleOpenClothesModal={handleOpenClothesModal}
          handleOpenRegisterModal={handleOpenRegisterModal}
          handleOpenLoginModal={handleOpenLoginModal}
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
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  clothingItems={clothingItems}
                  handleOpenClothesModal={handleOpenClothesModal}
                  handleOpenItemModal={handleOpenItemModal}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <LoginModal
          isOpen={activeModal === "login-modal"}
          onClose={handleCloseModal}
          onLogin={handleLoginSubmit}
        />
        <RegisterModal
          isOpen={activeModal === "register-modal"}
          onClose={handleCloseModal}
          onRegister={handleRegisterSubmit}
        />
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
