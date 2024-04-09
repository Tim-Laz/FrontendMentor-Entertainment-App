import Trending from "./Trending.jsx";
import Cards from "./Cards.jsx";
import { useMedia } from "./MediaContext.jsx";

export default function Home() {
  const media = useMedia();
  return (
    <div className="home">
      <Trending />
      <h1 className="home-heading hL">Recommended for you</h1>
      <Cards media={media} />
    </div>
  );
}
