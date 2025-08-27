function ItemModal({ card, isOpen }) {
  return (
    <div className={`modal${isOpen ? " modal_is-opened" : ""}`}>
      <p>{card.name}</p>
    </div>
  );
}
export default ItemModal;
