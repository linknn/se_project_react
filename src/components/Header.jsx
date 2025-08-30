import logo from "../images/logo.png";
import avatar from "../images/terrence.png";

function Header({ handleOpenClothesModal }) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <img src={logo} alt="WTWR logo" className="header__logo" />{" "}
      <p className="header__place">
        <time className="header__dateime" dateTime={now}>
          {dateStr}
        </time>
        , Seattle
      </p>
      <button onClick={handleOpenClothesModal} className="header__add-clothes-btn">
        + Add clothes
      </button>
      <p className="header__username">Terrence Tegegne</p>
      <img src={avatar} alt="Terrence Tegegne avatar" className="header__avatar" />
    </header>
  );
}

export default Header;
