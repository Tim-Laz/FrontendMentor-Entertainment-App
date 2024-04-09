import Home from "./home.jsx";
import Bookmarked from "./bookmarked.jsx";
import MovSeries from "./MovSeries.jsx";

export default function Content() {
  let temp = "home";
  return (
    <div className="content">
      {temp === "home" && <Home />}
      {temp === "bookmarked" && <Bookmarked />}
      {(temp === "movies" || temp === "series") && <MovSeries />}
    </div>
  );
}
