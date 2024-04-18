import "./home.scss";
import Trending from "../../Components/Trending";
import Cards from "../../Components/Cards";
import { useMedia } from "../../MediaContextReducer.jsx";

export default function Home() {
  const media = useMedia();
  const trendingMedia = media.filter((item) => item.isTrending);
  const normalMedia = media.filter((item) => !item.isTrending);
  return (
    <div className="home">
      <Trending media={trendingMedia} />
      <h1 className="home-heading hL">Recommended for you</h1>
      <Cards media={normalMedia} />
    </div>
  );
}
