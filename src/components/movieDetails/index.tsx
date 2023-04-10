import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { BackButton } from '../backButton';
import { CircularProgress } from '../rating';
import { Container, ContainerBackdrop, ContainerArea } from './styles';
import { FavoritesButton } from '../favoritesButton';
import { getTrailerUrl, calcpercentageRating, getYear } from '../helpers';
import { Loading } from '../loading';
import { MovieType, TrailerType } from '../../types/SearchType';
import { PosterItem } from '../posterItem';
import { ScrollToTopButton } from '../ScrollButton';
import imagemIndisponivel from '../../assets/notfoundimg/kid2.jpg';
import { Context } from '../../contexts/Context';


type Props = {
  movieData: MovieType;
  trailerData: TrailerType | undefined;
  castData: MovieType[];
};

// Componente MovieDetails, utilizado para exibir os detalhes de um filme específico
export const MovieDetails = ({movieData, trailerData, castData}:Props ) => {
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

  const backdropPath = movieData.backdrop_path;
  const imageUrl = backdropPath ? `${posterBaseUrl}${backdropPath}` : '';

  const posterPath = movieData.poster_path;
  const imageUrl2 = posterPath ? `${posterBaseUrl}${posterPath}` : '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleGoBack = () => {
    navigate(-1)
  };


  const handleFavoriteClick = () => {
    const isFavorited = state.favorites.listFavorites.some(
      (item) => item.id === movieData.id
    );
  
    if (isFavorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { id: movieData.id } });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: { listFavorites: movieData } });
    }
  };
  
 
  const MaxRating = 10;
  const isFavorited = state.favorites.listFavorites.some((item) => item.id === movieData.id);
  const percentageRating = calcpercentageRating(movieData?.vote_average ?? 0, MaxRating);
  const noInfoMessage = `Sinto muito ${(state.user.user?.name)?.toUpperCase()}, não temos informações disponíveis.`;

  
  return (
    movieData ? (
      <ContainerBackdrop backdropUrl={imageUrl}>
        <ContainerArea>
          <div className='area--backbutton'>
            <BackButton onClick={handleGoBack} />
          </div>
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
                      alt={movieData.title}
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          e.currentTarget.src = imagemIndisponivel;
                        }}
                        />
                      </div>
                    )}
                  
                  </div>
                  <div className="details--right">
                    <h2>{movieData.title}</h2>
                    <span>
                      {movieData.original_language} | {getYear(movieData.release_date)}
                    </span>
                    <br />
                    <strong>Duração: </strong>
                    <span>
                      {movieData.runtime ? `${movieData.runtime} minutos` : noInfoMessage}
                    </span>
                    <strong>Sinopse: </strong>
                    <span>{movieData.overview ? movieData.overview : noInfoMessage}</span>
                    <strong>Gênero:</strong>
                    <span>
                      {movieData.genres && movieData.genres.length > 0 ? (
                        movieData.genres.map((genre, index) => (
                          <span key={genre.id}>
                            {genre.name}
                            {index < movieData.genres.length - 1 ? ", " : ""}
                          </span>
                        ))
                      ) : (
                        noInfoMessage
                      )}
                    </span>
                    <strong>País de Produção:</strong>
                    <span>
                      {movieData.production_countries &&
                      movieData.production_countries.length > 0 ? (
                        movieData.production_countries.map((country, index) => (
                          <span key={country.iso_3166_1}>
                            {country.name}
                            {index < movieData.production_countries.length - 1 ? ", " : ""}
                          </span>
                        ))
                      ) : (
                        noInfoMessage
                      )}
                    </span>
                  </div>
                  <div className="favorite">
                    <div className="rating">
                        <strong>Avaliação</strong>
                        <CircularProgress
                          percentage={Math.round(parseFloat(percentageRating.toFixed(2)))}
                        />
                      </div>
                      <FavoritesButton onclick={handleFavoriteClick} isFavorited={isFavorited} />
                  </div>
                </div>
                <div className="cast">
                  <strong>Elenco Principal:</strong>
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
        )
  );  
};
