import Home from "./Home.jsx";
import Bookmarked from "./Bookmarked.jsx";
import MovSeries from "./MovSeries.jsx";
import SearchResults from "./SearchResults.jsx";

export default function Content() {
  let temp = "home";
  if (temp !== "searching") {
    return (
      <div className="content">
        {temp === "home" && <Home />}
        {temp === "bookmarked" && <Bookmarked />}
        {(temp === "movies" || temp === "series") && <MovSeries temp={temp} />}
      </div>
    );
  } else {
    return (
      <div className="content">
        <SearchResults temp={temp} searchString="earth" />
      </div>
    );
  }
}

// export function Content1() {
//   let temp = "series";
//   return (
//     <div className="content">
//       {temp === "home" && <Trending />}
//       <h1 className="hL">
//         {temp === "home" && "Recommended for you"}
//         {temp === "movies" && "Movies"}
//         {temp === "series" && "Series"}
//         {temp === "bookmarked" && "Bookmarked Movies"}
//         {temp === "searching" && "Found 2 results for earth"}
//       </h1>
//       <Cards />
//       {temp === "bookmarked" && (
//         <>
//           <h1 className="hL">Bookmarked Series</h1>
//           <Cards />
//         </>
//       )}
//     </div>
//   );
// }
