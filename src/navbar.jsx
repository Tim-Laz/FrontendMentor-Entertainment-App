export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./assets/logo.svg" alt="" />
      </div>
      <div className="menu">
        <ul className="menu-items">
          <li className="menu-item">
            <img src="./assets/icon-nav-home.svg" alt="home" />
          </li>
          <li className="menu-item">
            <img src="./assets/icon-nav-movies.svg" alt="search" />
          </li>
          <li className="menu-item">
            <img src="./assets/icon-nav-tv-series.svg" alt="" />
          </li>
          <li className="menu-item">
            <img src="./assets/icon-nav-bookmark.svg" alt="" />
          </li>
        </ul>
      </div>
      <div className="profile">
        <img src="./assets/image-avatar.png" alt="" />
      </div>
    </nav>
  );
}
