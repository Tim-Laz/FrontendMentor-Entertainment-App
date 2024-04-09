import Card from "./card";
import Data from "../data.json";

console.log(Data);

export default function Cards() {
  return (
    <div className="cards">
      {Data.filter((item) => !item.isTrending).map((item) => (
        <Card
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
  );
}
