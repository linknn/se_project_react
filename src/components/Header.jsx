import { useState } from "react";

import logo from "../images/logo.png";
import avatar from "../images/terrence.png";
import menuIcon from "../images/new_hamburger.svg";
import closeIcon from "../images/dark_close.svg";

import ToggleSwitch from "./ToggleSwitch";

function Header({
  handleOpenClothesModal,
  weatherData,
  isOpen,
  handleMobileOpenMenu,
  handleCloseModal,
}) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  // // for mobile nav
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <header className="header">
      <div className="header__side">
        <img src={logo} alt="WTWR logo" className="header__logo" />{" "}
        <p className="header__place">
          <time className="header__dateTime" dateTime={now}>
            {dateStr}
          </time>
          , {[weatherData.city]}
        </p>
      </div>
      <div className="header__side header__side-desktop">
        <ToggleSwitch />
        <button onClick={handleOpenClothesModal} className="header__add-clothes-btn">
          + Add clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne avatar" className="header__avatar" />
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
        {/* {isMenuOpen ? <span className="menu__open"></span> : <span className="menu__close"></span>} */}
      </button>
      {isOpen && (
        <div className="header__menu-box">
          <div className="header__side">
            <p className="header__username">Terrence Tegegne</p>
            <img src={avatar} alt="Terrence Tegegne avatar" className="header__avatar" />
          </div>
          <button onClick={handleOpenClothesModal} className="header__add-clothes-btn">
            + Add clothes
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
