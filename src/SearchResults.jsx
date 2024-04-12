import Cards from "./Cards.jsx";
import { useMedia } from "./MediaContext.jsx";

export default function SearchResults({ category, searchString }) {
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

  return (
    <div className="search-results">
      <h1 className="search-results-heading hL">
        Found {searchedResults(category).length} results for &apos;
        {searchString}&apos;
      </h1>
      <Cards media={searchedResults(category)} />
    </div>
  );
}
