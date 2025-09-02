import logo from "../images/logo.png";
import avatar from "../images/terrence.png";

import ToggleSwitch from "./ToggleSwitch";

function Header({ handleOpenClothesModal, weatherData }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

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
      <div className="header__side">
        <ToggleSwitch />
        <button onClick={handleOpenClothesModal} className="header__add-clothes-btn">
          + Add clothes
        </button>
        <p className="header__username">Terrence Tegegne</p>
        <img src={avatar} alt="Terrence Tegegne avatar" className="header__avatar" />
      </div>
    </header>
  );
}

export default Header;
