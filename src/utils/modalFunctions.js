export const handleOutsideModalClick = (evt, onClose) => {
  if (evt.target.classList.contains("modal")) {
    onClose();
  }
};
