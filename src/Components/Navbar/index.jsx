import "./navbar.scss";
import { Link } from "react-router-dom";
import { useCategory } from "../../useCategory.js";

export default function Navbar() {
  const category = useCategory();
  const iconSrc = ["home", "movies", "tv-series", "bookmark"];
  const activeClass = "active-icon";
  const inactiveClass = "inactive-icon";
  const menu = iconSrc.map((icon) => (
    <li key={icon} className="menu-item">
      <Link className="menu-link" to={"/" + icon}>
        <svg
          className={category === icon ? activeClass : inactiveClass}
          width={20}
          height={20}
        >
          <use xlinkHref={`./assets/sprites.svg#icon-nav-${icon}`}></use>
        </svg>
      </Link>
    </li>
  ));

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./assets/logo.svg" alt="" />
      </div>
      <ul className="menu">{menu}</ul>
      <img className="avatar-img" src="./assets/image-avatar.png" alt="" />
    </nav>
  );
}
