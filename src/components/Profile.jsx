import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({
  clothingItems,
  handleOpenClothesModal,
  handleOpenItemModal,
  loggedIn,
  currentUser,
}) {
  return (
    <div className="profile">
      <Sidebar currentUser={currentUser} loggedIn={loggedIn} />

      <ClothesSection
        clothingItems={clothingItems}
        handleOpenClothesModal={handleOpenClothesModal}
        handleOpenItemModal={handleOpenItemModal}
        loggedIn={loggedIn}
      />
    </div>
  );
}

export default Profile;
