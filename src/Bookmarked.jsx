import Cards from "./Cards.jsx";
import { useMedia } from "./MediaContext.jsx";

export default function Bookmarked() {
  const media = useMedia();
  const bookmarkedMovs = media.filter((item) => {
    return item.category === "Movie" && item.isBookmarked;
  });
  const bookmarkedTvs = media.filter((item) => {
    return item.category === "TV Series" && item.isBookmarked;
  });
  return (
    <div className="bookmarked">
      <h1 className="bookmarked-mov-heading hL">Bookmarked Movies</h1>
      <Cards media={bookmarkedMovs} />
      <h1 className="bookmarked-tv-heading hL">Bookmarked TV Series</h1>
      <Cards media={bookmarkedTvs} />
    </div>
  );
}
