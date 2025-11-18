import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({
  clothingItems,
  handleOpenClothesModal,
  handleOpenItemModal,
  loggedIn,
  currentUser,
  onLogout,
}) {
  return (
    <div className="profile">
      <Sidebar currentUser={currentUser} loggedIn={loggedIn} onLogout={onLogout} />

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
