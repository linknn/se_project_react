import closeIcon from "../images/light-close.png";
import closeIconDark from "../images/dark_close.svg";

function ItemModal({ card, isOpen, onClose }) {
  const handleOutsideModalClick = (evt) => {
    if (evt.target.classList.contains("modal")) {
      onClose();
    }
  };
  return (
    <div
      className={`modal${isOpen ? " modal_is-opened" : ""}`}
      onMouseDown={handleOutsideModalClick}
    >
      <div className="modal__container">
        <button type="button" className="modal__close-btn" onClick={onClose}>
          <img src={closeIcon} alt="x-icon" />
        </button>
        <button type="button" className="modal__close-btn_dark" onClick={onClose}>
          <img src={closeIconDark} alt="x-icon" />
        </button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__text">{card.name}</h2>
          <p className="modal__text">{card.weather}</p>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
