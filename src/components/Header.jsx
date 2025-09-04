import { useState } from "react";

import logo from "../images/logo.png";
import avatar from "../images/terrence.png";
import menuIcon from "../images/mobile_nav_icon.png";
import closeIcon from "../images/dark-close.png";

import ToggleSwitch from "./ToggleSwitch";

function Header({ handleOpenClothesModal, weatherData }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  // for mobile nav
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__side">
        <img src={logo} alt="WTWR logo" className="header__logo" />{" "}
        <p className="header__place">
          <time className="header__dateime" dateTime={now}>
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
      <button className="header__menu-toggle" onClick={toggleMenu}>
        <img
          src={isMenuOpen ? closeIcon : menuIcon}
          alt={isMenuOpen ? "Close menu" : "Open menu"}
          className="header__menu-icon"
        />
      </button>
    </header>
  );
}

export default Header;
