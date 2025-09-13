import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";

function Profile({ clothingItems }) {
  return (
    <div className="profile">
      <Sidebar />
      <ClothesSection clothingItems={clothingItems} />
    </div>
  );
}

export default Profile;
