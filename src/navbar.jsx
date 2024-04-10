export default function Navbar({ category, setCategory }) {
  const iconSrc = ["home", "movies", "tv-series", "bookmark"];
  const activeClass = "active-icon";
  const inactiveClass = "inactive-icon";
  const menu = iconSrc.map((icon) => (
    <li key={icon} className="menu-item">
      <a onClick={() => setCategory(icon)} className="menu-link" href="#">
        <svg
          className={category === icon ? activeClass : inactiveClass}
          width={20}
          height={20}
        >
          <use xlinkHref={`./assets/sprites.svg#icon-nav-${icon}`}></use>
        </svg>
      </a>
    </li>
  ));

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./assets/logo.svg" alt="" />
      </div>
      <ul className="menu">
        {menu}
        <li className="menu-item">
          <img className="avatar-img" src="./assets/image-avatar.png" alt="" />
        </li>
      </ul>
    </nav>
  );
}
