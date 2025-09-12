import avatar from "../images/terrence.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__user-info">
        <img src={avatar} alt="Terrence Tegegne avater" className="sidebar__avatar" />
        <p className="sidebar__username">Terrence Tegegne</p>
      </div>
    </aside>
  );
}

export default Sidebar;
