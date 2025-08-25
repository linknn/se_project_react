import "../blocks/ItemModal.css";

function ItemModal({ card, isOpen }) {
  return <div className={'modal${isOpen ? " modal_is-opened" : ""}'}>{card.name}</div>;
}
export default ItemModal;
