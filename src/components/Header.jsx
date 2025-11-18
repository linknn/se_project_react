import { Link } from "react-router-dom";

import logo from "../images/logo.png";
// import avatar from "../images/terrence.png";
import menuIcon from "../images/new_hamburger.svg";
import closeIcon from "../images/dark_close.svg";

import ToggleSwitch from "./ToggleSwitch";

function Header({
  handleOpenClothesModal,
  handleOpenRegisterModal,
  handleOpenLoginModal,
  weatherData,
  isOpen,
  handleMobileOpenMenu,
  handleCloseModal,
  loggedIn,
  currentUser,
}) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__side header__side-left">
        <Link className="header__link" to="/">
          <img src={logo} alt="WTWR logo" className="header__logo" />{" "}
          <p className="header__place">
            <time className="header__dateTime" dateTime={now}>
              {dateStr}
            </time>
            , {[weatherData.city]}
          </p>
        </Link>
      </div>

      <div className="header__side header__side-desktop">
        <ToggleSwitch />

        {loggedIn ? (
          <>
            <button onClick={handleOpenClothesModal} className="header__add-clothes-btn">
              + Add clothes
            </button>
            <Link className="header__link" to="/profile">
              <p className="header__username">{currentUser.name}</p>
              <img src={currentUser.avatar} alt="User avatar" className="header__avatar" />
            </Link>
          </>
        ) : (
          <>
            <button type="button" className="header__auth-button" onClick={handleOpenRegisterModal}>
              Sign Up
            </button>
            <button type="button" className="header__auth-button" onClick={handleOpenLoginModal}>
              Sign In
            </button>
          </>
        )}
      </div>

      <button
        className={`header__menu-toggle ${isOpen && "header__menu-toggle_close"}`}
        onClick={isOpen ? handleCloseModal : handleMobileOpenMenu}
      >
        <img
          src={!isOpen ? menuIcon : closeIcon}
          alt={isOpen ? "Close menu" : "Open menu"}
          className={!isOpen ? "header__menu_open" : "header__menu_close"}
        />
      </button>

      {isOpen && (
        <div className="header__menu-box">
          {loggedIn ? (
            <>
              <div className="header__side">
                <p className="header__username">{currentUser.name}</p>
                <img src={currentUser.avatar} alt="User avatar" className="header__avatar" />
              </div>
              <button onClick={handleOpenClothesModal} className="header__add-clothes-btn">
                + Add clothes
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="header__auth-button"
                onClick={handleOpenRegisterModal}
              >
                Sign Up
              </button>
              <button type="button" onClick={handleOpenLoginModal}>
                Sign In
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
