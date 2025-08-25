import "../blocks/ItemCard.css";

function ItemCard({ data, onCardClick }) {
  return (
    <li className="card">
      <h2 className="card__title">{data.name}</h2>
      <img src={data.link} alt={data.name} className="card__image" onClick={onCardClick} />
    </li>
  );
}

export default ItemCard;
