import Card from "./Card";

export default function Cards({ media }) {
  return (
    <div className="cards">
      {media
        .filter((item) => !item.isTrending)
        .map((item) => (
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
