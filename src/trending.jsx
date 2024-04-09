import TrendingCard from "./trendingCard";
import Data from "../data.json";

export default function Trending() {
  return (
    <div className="trending">
      <h1 className="hL">Trending</h1>
      <div className="trending-cards">
        {Data.filter((item) => item.isTrending).map((item) => (
          <TrendingCard
            key={item.title}
            title={item.title}
            year={item.year}
            category={item.category}
            rating={item.rating}
            src={item.thumbnail.regular}
            bookmarked={item.isBookmarked}
          />
        ))}
      </div>
    </div>
  );
}
