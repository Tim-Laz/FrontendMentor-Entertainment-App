import "./searchResults.scss";
import Cards from "../../Components/Cards";
import { useMedia } from "../../MediaContextReducer.jsx";
import { useCategory } from "../../useCategory.js";

export default function SearchResults({ searchString }) {
  const category = useCategory();
  const media = useMedia();
  const searchedMedia = media.filter((item) =>
    item.title.toLowerCase().includes(searchString.toLowerCase())
  );
  const searchedMovies = searchedMedia.filter(
    (item) => item.category === "Movie"
  );
  const searchedTvs = searchedMedia.filter(
    (item) => item.category === "TV Series"
  );
  const searchedHome = [...searchedMedia];
  const searchedBookmarks = searchedMedia.filter((item) => item.isBookmarked);

  const searchedResults = function (category) {
    switch (category) {
      case "movies":
        return [...searchedMovies];
      case "tv-series":
        return [...searchedTvs];
      case "home":
        return [...searchedHome];
      case "bookmark":
        return [...searchedBookmarks];
    }
  };

  const results = searchedResults(category);

  return (
    <div className="search-results">
      <h1 className="search-results-heading hL">
        Found {results.length} results for &apos;
        {searchString}&apos;
      </h1>
      <Cards media={results} />
    </div>
  );
}
