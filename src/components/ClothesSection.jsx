import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

import ItemCard from "./ItemCard";

function ClothesSection({
  clothingItems,
  handleOpenClothesModal,
  handleOpenItemModal,
  handleCardLike,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter((item) => item.owner === currentUser?._id);

  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your items
        <button onClick={handleOpenClothesModal} className="clothes-section__btn">
          + Add New
        </button>
      </div>

      <ul className="card-list">
        {userItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              data={item}
              onCardClick={handleOpenItemModal}
              onCardLike={handleCardLike}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
