import Cards from "./Cards.jsx";
import { useMedia } from "./MediaContext.jsx";

export default function SearchResults({ temp, searchString }) {
  const media = useMedia();
  return (
    <div className="search-results">
      <h1 className="search-results-heading hL">
        Found 2 results for &apos;Earth&apos;
      </h1>
      <Cards media={media} />
    </div>
  );
}
