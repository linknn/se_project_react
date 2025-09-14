import ItemCard from "./ItemCard";

function ClothesSection({ clothingItems, handleOpenClothesModal, handleOpenItemModal }) {
  return (
    <section className="clothes-section">
      <div className="clothes-section__row">
        Your items
        <button onClick={handleOpenClothesModal} className="clothes-section__btn">
          + Add New
        </button>
      </div>
      <ul className="card-list">
        {clothingItems.map((item) => {
          return <ItemCard key={item._id} data={item} onCardClick={handleOpenItemModal} />;
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
