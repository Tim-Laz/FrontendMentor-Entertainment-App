import "./content.scss";
import Home from "../Home";
import Bookmarked from "../Bookmarked";
import MovSeries from "../MovSeries";
import SearchResults from "../SearchResults";
import { Routes, Route, Navigate } from "react-router-dom";

export default function Content({ searchString }) {
  if (searchString)
    return (
      <div className="content">
        <SearchResults searchString={searchString} />
      </div>
    );

  return (
    <div className="content">
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="movies" element={<MovSeries />}></Route>
        <Route path="tv-series" element={<MovSeries />}></Route>
        <Route path="bookmark" element={<Bookmarked />}></Route>
        <Route path="*" element={<Navigate to="home" replace />} />
      </Routes>
    </div>
  );
}
