import Cards from "./Cards.jsx";
import { useMedia } from "./MediaContext.jsx";

export default function MovSeries({ temp }) {
  const media = useMedia();
  const movies = media.filter((item) => item.category === "Movie");
  const tvs = media.filter((item) => item.category === "TV Series");
  return (
    <div className="movseries">
      <h1 className="movseries-heading hL">
        {temp === "movies" ? "Movies" : "TV Series"}
      </h1>
      <Cards media={temp === "movies" ? movies : tvs} />
    </div>
  );
}
