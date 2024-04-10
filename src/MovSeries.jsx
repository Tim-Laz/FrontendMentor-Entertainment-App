import Cards from "./Cards.jsx";
import { useMedia } from "./MediaContext.jsx";

export default function MovSeries({ category }) {
  const media = useMedia();
  const movies = media.filter((item) => item.category === "Movie");
  const tvs = media.filter((item) => item.category === "TV Series");
  console.log(movies, tvs);
  return (
    <div className="movseries">
      <h1 className="movseries-heading hL">
        {category === "movies" ? "Movies" : "TV Series"}
      </h1>
      <Cards media={category === "movies" ? movies : tvs} />
    </div>
  );
}
