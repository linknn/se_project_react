import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({
  clothingItems,
  handleOpenClothesModal,
  handleOpenItemModal,
  loggedIn,
  currentUser,
  onLogout,
  onEditProfile,
}) {
  return (
    <div className="profile">
      <Sidebar
        currentUser={currentUser}
        loggedIn={loggedIn}
        onLogout={onLogout}
        onEditProfile={onEditProfile}
      />

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
