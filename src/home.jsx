import Trending from "./trending.jsx";
import Cards from "./cards.jsx";

export default function Home() {
  return (
    <div className="home">
      <Trending />
      <h1>Recommended for you</h1>
      <Cards />
    </div>
  );
}
