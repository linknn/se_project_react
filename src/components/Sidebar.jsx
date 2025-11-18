function Sidebar({ currentUser, onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-info">
        <img
          src={currentUser?.avatar}
          alt={`${currentUser?.name}avatar`}
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <button className="sidebar__logout-btn" onClick={onLogout}>
        Log Out
      </button>
    </aside>
  );
}

export default Sidebar;
