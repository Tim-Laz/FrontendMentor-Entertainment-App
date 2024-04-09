export default function SearchBar() {
  return (
    <div className="searchbar">
      <form action="">
        <div className="search-container">
          <img
            className="search-icon"
            src="./assets/icon-search.svg"
            alt="search"
          />
          <input
            className="search-input hM"
            type="text"
            placeholder="Search for movies or TV series"
          />
        </div>
      </form>
    </div>
  );
}
