import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({ clothingItems, handleOpenClothesModal, handleOpenItemModal }) {
  return (
    <div className="profile">
      <Sidebar />

      <ClothesSection
        clothingItems={clothingItems}
        handleOpenClothesModal={handleOpenClothesModal}
        handleOpenItemModal={handleOpenItemModal}
      />
    </div>
  );
}

export default Profile;
