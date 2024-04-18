import "./main-page.scss";
import SearchBar from "../../Components/SearchBar";
import Content from "../../Pages/Content";
import { useSearchParams } from "react-router-dom";
import { useCategory } from "../../useCategory.js";

export default function Main() {
  const [searchString, setSearchString] = useSearchParams({});
  const category = useCategory();

  function handleSearch(searchValue) {
    if (!searchValue) return setSearchString({});
    setSearchString({ search: searchValue });
  }

  return (
    <main className="main">
      <SearchBar key={category} handleSearch={handleSearch} />
      <Content searchString={searchString.get("search")} />
    </main>
  );
}
