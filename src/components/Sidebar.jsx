import { useState, useEffect } from "react";

function Sidebar({ currentUser, onLogout, onEditProfile }) {
  const [avatarError, setAvatarError] = useState(false);

  const userAvatarInitial = () => {
    const name = currentUser?.name || "";
    return name ? name[0].toUpperCase() : "";
  };

  useEffect(() => {
    setAvatarError(false);
  }, [currentUser]);

  return (
    <aside className="sidebar">
      <div className="sidebar__user-info">
        {!avatarError && currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt={`${currentUser?.name}avatar`}
            className="sidebar__avatar"
            onError={() => setAvatarError(true)}
          />
        ) : (
          <div className="sidebar__avatar sidebar__avatar_initial">{userAvatarInitial()}</div>
        )}

        <p className="sidebar__username">{currentUser?.name}</p>
      </div>

      <button className="sidebar__edit-btn" onClick={onEditProfile}>
        Edit Profile
      </button>

      <button className="sidebar__logout-btn" onClick={onLogout}>
        Log Out
      </button>
    </aside>
  );
}

export default Sidebar;
