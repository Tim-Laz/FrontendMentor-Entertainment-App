import SearchBar from "./SearchBar.jsx";
import Content from "./Content.jsx";
import { useState, useEffect } from "react";

export default function Main({ category }) {
  const [searchString, setSearchString] = useState(null);

  function handleSearch(searchValue) {
    setSearchString(searchValue);
  }

  return (
    <main className="main">
      <SearchBar category={category} handleSearch={handleSearch} />
      <Content category={category} searchString={searchString} />
    </main>
  );
}
