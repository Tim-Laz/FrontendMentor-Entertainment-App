export default function Card({
  title,
  year,
  category,
  rating,
  src,
  bookmarked,
}) {
  return (
    <div className="card">
      <div className="card-img">
        <picture className="img">
          <source srcSet={src.large} media="(min-width: 768px)" />
          <source srcSet={src.medium} media="(min-width: 376px)" />
          <img className="img" src={src.small} alt={title} />
        </picture>
        <a href="#" className="play">
          <img className="play-icon" src="./assets/icon-play.svg" alt="play" />
          <p className="hXS play-text">Play</p>
        </a>
      </div>
      <div className="bookmark-container">
        <svg stroke="white" width={11.67} height={12} className="icon-bookmark">
          {bookmarked ? (
            <use xlinkHref="./assets/sprites.svg#icon-bookmark-full"></use>
          ) : (
            <use xlinkHref="./assets/sprites.svg#icon-bookmark-empty"></use>
          )}
        </svg>
      </div>
      <div className="card-info">
        <p className="year pS">{year}</p>
        <div className="dot"></div>
        <div className="category-container">
          {category === "Movie" ? (
            <img
              className="icon-category"
              src="./assets/icon-category-movie.svg"
              alt="movie icon"
            />
          ) : (
            <img
              className="icon-category"
              src="./assets/icon-category-tv.svg"
              alt="tv icon"
            />
          )}

          <p className="category pS">{category}</p>
        </div>
        <div className="dot"></div>
        <p className="rating pS">{rating}</p>
      </div>
      <div className="card-title hXS">{title}</div>
    </div>
  );
}
