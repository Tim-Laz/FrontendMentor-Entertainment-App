import { useState, useEffect } from "react";

export default function SearchBar({ category, handleSearch }) {
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchValue) {
        handleSearch(null);
        setSearchValue("");
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape" && searchValue) handleSearch(null);
      });
    };
  }, [handleSearch, searchValue]);

  function placeholder() {
    if (category === "home") return "Search for movies or TV series";
    if (category === "movies") return "Search for movies";
    if (category === "tv-series") return "Search for TV series";
    if (category === "bookmark") return "Search for bookmarked shows";
  }

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(searchValue);
          }}
          action=""
        >
          <div className="search-container">
            <img
              className="search-icon"
              src="./assets/icon-search.svg"
              alt="search"
            />
            <input
              onChange={(e) => {
                if (e.target.value === "") handleSearch(null);
                setSearchValue(e.target.value);
              }}
              value={searchValue}
              className="search-input hM"
              type="text"
              placeholder={placeholder()}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
