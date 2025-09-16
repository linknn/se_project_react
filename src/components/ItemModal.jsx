import closeIcon from "../images/light-close.png";
import closeIconDark from "../images/dark_close.svg";
import { handleOutsideModalClick } from "../utils/modalFunctions";
import { useState } from "react";

function ItemModal({ card, isOpen, onClose, handleDeleteItem }) {
  const [isLoading, setIsLoading] = useState(false);
  function handleDelete() {
    setIsLoading(true);
    handleDeleteItem(card).finally(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    });
    onClose();
  }

  return (
    <div
      className={`modal${isOpen ? " modal_is-opened" : ""}`}
      onMouseDown={(evt) => handleOutsideModalClick(evt, onClose)}
    >
      <div className="modal__container">
        <button type="button" className="modal__close-btn" onClick={onClose}>
          <img src={closeIcon} alt="x-icon" />
        </button>
        <button type="button" className="modal__close-btn_dark" onClick={onClose}>
          <img src={closeIconDark} alt="x-icon" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__text">{card.name}</h2>
          <p className="modal__text">Weather: {card.weather}</p>
          <button onClick={handleDelete} className="modal__delete-btn">
            {isLoading ? "Deleting..." : "Delete Item"}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemModal;
