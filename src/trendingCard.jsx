export default function TrendingCard({
  title,
  year,
  category,
  rating,
  src,
  bookmarked,
}) {
  return (
    <div className="tr-card">
      <div className="tr-card-img">
        <picture className="tr-img">
          <source srcSet={src.large} media="(min-width: 768px)" />
          <img className="tr-img" src={src.small} alt={title} />
        </picture>
        <a href="#" className="tr-play">
          <img
            className="tr-play-icon"
            src="./assets/icon-play.svg"
            alt="play"
          />
          <p className="hXS tr-play-text">Play</p>
        </a>
      </div>
      <div className="tr-bookmark-container">
        <svg
          stroke="white"
          width={11.67}
          height={12}
          className="tr-icon-bookmark"
        >
          {bookmarked ? (
            <use xlinkHref="./assets/sprites.svg#icon-bookmark-full"></use>
          ) : (
            <use xlinkHref="./assets/sprites.svg#icon-bookmark-empty"></use>
          )}
        </svg>
      </div>
      <div className="tr-card-descr">
        <div className="tr-card-info">
          <p className="tr-year pM">{year}</p>
          <div className="tr-dot"></div>
          <div className="tr-category-container">
            {category === "Movie" ? (
              <img
                className="tr-icon-category"
                src="./assets/icon-category-movie.svg"
                alt="movie icon"
              />
            ) : (
              <img
                className="tr-icon-category"
                src="./assets/icon-category-tv.svg"
                alt="tv icon"
              />
            )}

            <p className="tr-category pM">{category}</p>
          </div>
          <div className="tr-dot"></div>
          <p className="tr-rating pM">{rating}</p>
        </div>
        <div className="tr-card-title hS">{title}</div>
      </div>
    </div>
  );
}
