export default function SearchBar() {
  return (
    <div className="searchbar">
      <form action="">
        <div className="search-container">
          <img src="./assets/icon-search.svg" alt="search" />
          <input
            className="search-input"
            type="text"
            placeholder="Search for movies or tv series"
          />
        </div>
      </form>
    </div>
  );
}
