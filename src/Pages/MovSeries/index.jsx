import "./movSeries.scss";
import Cards from "../../Components/Cards";
import { useMedia } from "../../MediaContextReducer.jsx";
import { useCategory } from "../../useCategory.js";

export default function MovSeries() {
  const category = useCategory();
  const media = useMedia();
  const movies = media.filter((item) => item.category === "Movie");
  const tvs = media.filter((item) => item.category === "TV Series");
  return (
    <div className="movseries">
      <h1 className="movseries-heading hL">
        {category === "movies" ? "Movies" : "TV Series"}
      </h1>
      <Cards media={category === "movies" ? movies : tvs} />
    </div>
  );
}
