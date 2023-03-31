import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "../backButton";
import { CircularProgress } from "../rating";
import { Container, ContainerArea, ContainerBackdrop } from "./styles";
import { FavoritesButton } from "../favoritesButton";
import { calcpercentageRating, getYear, getTrailerUrl } from "../helpers";
import { Loading } from "../loading";
import { MovieType, SerieType, TrailerType,} from "../../types/SearchType";
import { PosterItem } from "../posterItem";
import { ScrollToTopButton } from "../ScrollButton";
import { useParams } from "react-router-dom";
import imagemIndisponivel from "../../assets/notfoundimg/kid2.jpg";
import { Context } from "../../contexts/Context";

type Props = {
  serieData: SerieType;
  trailerData: TrailerType | undefined;
  castData: MovieType[];
};

// Componente SerieDetails, utilizado para exibir os detalhes de uma serie específica.
export const SerieDetails = ({ serieData, trailerData, castData }: Props) => {
  const { state, dispatch } = useContext(Context);

  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  const backdropPath = serieData.backdrop_path;
  const imageUrl = backdropPath ? `${posterBaseUrl}${backdropPath}` : "";

  const posterPath = serieData.poster_path;
  const imageUrl2 = posterPath ? `${posterBaseUrl}${posterPath}` : "";

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFavoriteClick = () => {
    const isFavorited = state.favorites.listFavorites.some(
      (item) => item.id === serieData.id
    );

    if (isFavorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { id: serieData.id } });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: { listFavorites: serieData } });
    }
  };

  const MaxRating = 10;
  const isFavorited = state.favorites.listFavorites.some(
    (item) => item.id === serieData.id
  );
  const percentageRating = calcpercentageRating(
    serieData?.vote_average ?? 0,
    MaxRating
  );
  const noInfoMessage = `Sinto muito ${state.user.user?.name?.toUpperCase()}, não temos informações disponíveis.`;

  return serieData ? (
    <ContainerBackdrop backdropUrl={imageUrl}>
      <ContainerArea>
        <Container theme={state.theme.status}>
            <div className="details">
              <div className="details--left">
                {trailerData ? (
                  <div className="tv--trailer">
                    <div className="trailer">
                      <iframe
                        src={`${getTrailerUrl(trailerData.key)}`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="info">
                      <h5>Assista o trailer</h5>
                    </div>
                  </div>
                ) : (
                  <div className="poster">
                    <img
                      src={imageUrl2}
                      alt={serieData.name}
                      onError={(
                        e: React.SyntheticEvent<HTMLImageElement, Event>
                      ) => {
                        e.currentTarget.src = imagemIndisponivel;
                      }}
                    />
                  </div>
                )}
                <div className="rating">
                  <strong>Rating</strong>
                  <CircularProgress
                    percentage={parseFloat(percentageRating.toFixed(2))}
                  />
                </div>
              </div>
              <div className="details--right">
                <h2>{serieData.name || serieData.original_name}</h2>
                <span>
                  {serieData.original_language} |{" "}
                  {getYear(serieData.first_air_date)}
                </span>{" "}
                <br />
                <strong>Sinopse: </strong>
                <span>
                  {serieData.overview ? serieData.overview : noInfoMessage}
                </span>
                <strong>Gênero:</strong>
                <span>
                  {serieData.genres.length > 0
                    ? serieData.genres.map((genre, index) => (
                        <span key={genre.id}>
                          {genre.name}
                          {index < serieData.genres.length - 1 ? ", " : ""}
                        </span>
                      ))
                    : noInfoMessage}
                </span>
                <strong>País de Produção:</strong>
                <span>
                  {serieData.production_countries.length > 0
                    ? serieData.production_countries.map((country, index) => (
                        <span key={country.iso_3166_1}>
                          {country.name}
                          {index < serieData.production_countries.length - 1
                            ? ", "
                            : ""}
                        </span>
                      ))
                    : noInfoMessage}
                </span>
                <strong>Status:</strong>
                <span>
                  {serieData.status || serieData.in_production
                    ? "Em produção"
                    : "Finalizada"}
                </span>
                <strong>Popularidade:</strong>
                <span>{serieData.popularity}</span>
                <strong>Temporadas:</strong>
                <span>{serieData.number_of_seasons}</span>
                <strong>Episódios:</strong>
                <span>{serieData.number_of_episodes}</span>
              </div>
              <div className="favorite">
                <BackButton onClick={handleGoBack} />
                <FavoritesButton
                  onclick={handleFavoriteClick}
                  isFavorited={isFavorited}
                />
              </div>
            </div>
            <div className="cast">
              <strong>Elenco:</strong>
              <div className="cast--area">
                {castData && castData.length > 0 ? (
                  castData.map((item, index) => {
                    return <PosterItem key={index} data={item} media_type="person" />;
                  })
                ) : (
                  <li>{noInfoMessage}</li>
                )}
              </div>
            </div>
        </Container>
      </ContainerArea>
      <ScrollToTopButton />
    </ContainerBackdrop>
  ) : (
    <Loading />
  );
};
