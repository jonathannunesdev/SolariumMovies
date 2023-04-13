import { useEffect, useContext } from "react";
import { Context } from "../../contexts/Context";

import { Api } from "../../apis/Api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ArrowDown, StyledImage, Overlay, Subtitle, ImageContainer,  BannerContent } from "./styles";

type SliderBannerProps = {
  onArrowDownClick: () => void;
};

export const SliderBanner: React.FC<SliderBannerProps> = ({
  onArrowDownClick,
}) => {
  const { state, dispatch } = useContext(Context);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false
  };

  useEffect(() => {
    const fetchLatestMovies = async () => {
      const latestMoviesList = await Api.getLatestMovies();
      dispatch({
        type: "SET_LATEST_MOVIE_LIST",
        payload: { latestList: latestMoviesList },
      });
    };

    fetchLatestMovies();
  }, [dispatch]);

  return (
    <>
      <Slider {...settings}>
        {state.search.latestList.slice(0, 5).map((search, index) =>
          search.backdrop_path ? (
            <div key={index} className="Container--slider">
              <ImageContainer>
                <StyledImage
                  src={`https://image.tmdb.org/t/p/w1280${search.backdrop_path}`}
                  alt={search.title}
                />
                <Overlay />
                <BannerContent>
                  <Subtitle>
                    <strong>O Seu Guia</strong> <br /> Para o Mundo <br /> dos
                    Filmes e Séries!
                  </Subtitle>
                  <ArrowDown onClick={onArrowDownClick}>
                    Inscreva-se &nbsp;
                    <FontAwesomeIcon icon={faChevronDown} />
                  </ArrowDown>
                </BannerContent>
              </ImageContainer>
            </div>
          ) : null
        )}
      </Slider>
    </>
  );
};
