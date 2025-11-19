import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function ItemCard({ data, onCardClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);

  // check if liked
  const isLiked = data.likes?.some((id) => id === currentUser?._id);
  const likeButtonClass = `card__like-btn ${isLiked ? "card__like-btn_liked" : ""} ${
    !currentUser ? "card__like-btn_hidden" : ""
  }`;

  function handleOpenCard() {
    onCardClick(data);
  }

  function handleLikeClick(evt) {
    // prevent modal opening
    evt.stopPropagation();
    onCardLike(data);
  }

  return (
    <li className="card" onClick={handleOpenCard}>
      <div className="card__title-wrapper">
        <h2 className="card__title">{data.name}</h2>

        <button className={likeButtonClass} aria-label="like button" onClick={handleLikeClick} />
      </div>

      <img src={data.imageUrl} alt={data.name} className="card__image" />
    </li>
  );
}

export default ItemCard;
