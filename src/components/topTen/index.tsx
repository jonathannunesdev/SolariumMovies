import Slider from "react-slick";
import { CarouselItemType } from "../../types/SearchType";
import { Banner, BannerImage } from "./styles";
import { Link } from "react-router-dom";

type TopTenCarouselProps = {
  items: CarouselItemType[];
};

//componente que renderiza as top 10 series na area logada.
export const TopTenCarousel = ({ items }: TopTenCarouselProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Link key={item.id} to={`/detailed/${item.media_type}/${item.id}`}>
          <Banner>
            <BannerImage
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <h1>{index + 1}</h1>
          </Banner>
        </Link>
      ))}
    </Slider>
  );
};
