import closeIcon from "../images/dark-close.png";

function ModalWithForm({ isOpen, children, handleSubmit, title, buttonText, onClose }) {
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
      <div className="modal__container modal__container_type_form">
        <h2 className="modal__title">{title}</h2>
        <button
          type="button"
          className="modal__close-btn modal__close-btn_type_form"
          onClick={onClose}
        >
          <img src={closeIcon} alt="x-icon" />
        </button>
        <form onSubmit={handleSubmit} name={name} className="modal__form">
          {children}
        </form>
        <button type="submit" className="modal__submit-btn">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default ModalWithForm;
