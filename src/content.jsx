import Home from "./Home.jsx";
import Bookmarked from "./Bookmarked.jsx";
import MovSeries from "./MovSeries.jsx";
import SearchResults from "./SearchResults.jsx";

export default function Content({ category, searchString }) {
  if (!searchString) {
    return (
      <div className="content">
        {category === "home" && <Home />}
        {(category === "movies" || category === "tv-series") && (
          <MovSeries category={category} />
        )}
        {category === "bookmark" && <Bookmarked />}
      </div>
    );
  } else {
    return (
      <div className="content">
        <SearchResults category={category} searchString={searchString} />
      </div>
    );
  }
}
