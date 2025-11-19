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
import EditProfileModal from "./EditProfileModal";

import ProtectedRoute from "./ProtectedRoute";

import { signup, signin, getUser, editProfile } from "../utils/auth";

import { getWeatherData } from "../utils/weatherApi";
import { addItem, getItems, deleteItem, addCardLike, removeCardLike } from "../utils/api";
import CurrentTemperatureUnitContext from "../utils/CurrentTemperatureUnitContext";
import CurrentUserContext from "../contexts/CurrentUserContext";

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

  function handleOpenEditProfileModal() {
    setActiveModal("edit-profile-modal");
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

        // fetch user data immediately
        return getUser(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        setLoggedIn(true);
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

  function handleEditProfileSubmit(updatedData) {
    const token = localStorage.getItem("jwt");

    editProfile(updatedData, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        handleCloseModal();
      })
      .catch((err) => console.error("Profile update error:", err));
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser(null);
    handleCloseModal();
  }

  function handleCardLike(item) {
    const token = localStorage.getItem("jwt");
    if (!token || !currentUser) return;

    const isLiked = item.likes.some((id) => id === currentUser?._id);

    const apiCall = isLiked ? removeCardLike : addCardLike;

    apiCall(item._id, token)
      .then((updatedItem) => {
        setClothingItems((items) => items.map((i) => (i._id === item._id ? updatedItem : i)));
      })
      .catch((err) => console.error("Like error:", err));
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
    <CurrentUserContext.Provider value={currentUser}>
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
            loggedIn={loggedIn}
            currentUser={currentUser}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  clothingItems={clothingItems}
                  handleOpenItemModal={handleOpenItemModal}
                  handleCardLike={handleCardLike}
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
                    onCardLike={handleCardLike}
                    loggedIn={loggedIn}
                    currentUser={currentUser}
                    onLogout={handleLogout}
                    onEditProfile={handleOpenEditProfileModal}
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
          <EditProfileModal
            isOpen={activeModal === "edit-profile-modal"}
            onClose={handleCloseModal}
            onEditProfile={handleEditProfileSubmit}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
