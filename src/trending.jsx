import TrendingCard from "./TrendingCard";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Trending({ media }) {
  const trendingMedia = media.filter((item) => item.isTrending);
  // const cardsCount = trendingMedia.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="slider">
      <h1 className="trending-heading hL">Trending</h1>
      <div className="embla slider-list" ref={emblaRef}>
        <div className="embla__container slider-track">
          {trendingMedia.map((item) => (
            <TrendingCard
              key={item.title}
              title={item.title}
              year={item.year}
              category={item.category}
              rating={item.rating}
              src={item.thumbnail.trending}
              bookmarked={item.isBookmarked}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
