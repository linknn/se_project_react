function Sidebar({ currentUser }) {
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
    </aside>
  );
}

export default Sidebar;
