export default function Navbar() {
  const iconSrc = [
    "-nav-home",
    "-nav-movies",
    "-nav-tv-series",
    "-nav-bookmark",
  ];
  const menu = iconSrc.map((icon) => (
    <li key={icon} className="menu-item">
      <a className="menu-link" href="#">
        <svg fill="#5A698F" width={20} height={20}>
          <use xlinkHref={`./assets/sprites.svg#icon${icon}`}></use>
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
