import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Api } from "../../apis/Api";

import { MovieType, PersonType, SerieType, TrailerType, CreditType } from "../../types/SearchType";
import { MovieDetails } from "../../components/movieDetails";
import { Loading } from "../../components/loading";
import { SerieDetails } from "../../components/serieDetails";
import { PersonDetails } from "../../components/personDetails";
import { filterPopularity } from "../../components/helpers";

export const DetailedSearch = () => {
  const [watchTrailer, setWatchTrailer] = useState<TrailerType | undefined>(
    undefined
  );
  const [credits, setCredits] = useState<CreditType>();
  const [maxRating, setMaxRating] = useState<number>(0);
  const [details, setDetails] = useState<
    MovieType | SerieType | PersonType | null
  >(null);
  const [movieCast, setMovieCast] = useState([]);
  const [serieCast, setSerieCast] = useState([]);

  const { id, media_type } = useParams<{ id: string; media_type: string }>();

  useEffect(() => {
    if (media_type === "tv") {
      fetchSerieDetails();
    } else if (media_type === "movie") {
      fetchMovieDetails();
    } else {
      fetchPersonDetails();
    }
    fetchRating();
  }, [id, media_type]);

  const fetchMovieDetails = async () => {
    const movieCastData = await Api.getMovieCast(Number(id));
    const movieData = await Api.getMovieDetails(Number(id));
    const movieTrailers = await Api.getMovieTrailers(Number(id));
    const youtubeTrailers = movieTrailers.filter(
      (trailer: TrailerType) => trailer.site === "YouTube"
    );
    setMovieCast(movieCastData);
    setDetails(movieData);

    if (youtubeTrailers.length > 0) {
      setWatchTrailer(youtubeTrailers[0]);
    } else {
      setWatchTrailer(undefined);
    }
  };

  const fetchSerieDetails = async () => {
    const serieCastData = await Api.getSerieCast(Number(id));
    const serieData = await Api.getSeriesDetails(Number(id));
    const serieTrailers = await Api.getSeriesTrailers(Number(id));
    const youtubeTrailers = serieTrailers.filter(
      (trailer: TrailerType) => trailer.site === "YouTube"
    );
    setSerieCast(serieCastData);
    setDetails(serieData);

    if (youtubeTrailers.length > 0) {
      setWatchTrailer(youtubeTrailers[0]);
    } else {
      setWatchTrailer(undefined);
    }
  };

  const fetchPersonDetails = async () => {
    const personData = await Api.getPersonDetails(Number(id));
    setDetails(personData);
    await fetchCombinedCreditsPerson(Number(id));
  };

  const fetchCombinedCreditsPerson = async (personId: number) => {
    const moviesCreditsPromise = Api.getMoviesCreditsPerson(personId);
    const seriesCreditsPromise = Api.getSeriesCreditsPerson(personId);

    const [moviesCreditsData, seriesCreditsData] = await Promise.all([
      moviesCreditsPromise,
      seriesCreditsPromise,
    ]);

    const combinedCastData = filterPopularity([
      ...moviesCreditsData.cast,
      ...seriesCreditsData.cast,
    ]);
    const combinedCrewData = filterPopularity([
      ...moviesCreditsData.crew,
      ...seriesCreditsData.crew,
    ]);

    const combinedCreditsData = {
      cast: combinedCastData,
      crew: combinedCrewData,
    };

    setCredits(combinedCreditsData);
  };

  const fetchRating = async () => {
    const popularMovies = await Api.getPopularMovies();
    if (popularMovies.results.length > 0) {
      setMaxRating(popularMovies.results[0].popularity);
    }
  };

  return (
    <>
      {details && details.media_type === "movie" && (
        <MovieDetails
          movieData={details as MovieType}
          trailerData={watchTrailer}
          castData={movieCast}
        />
      )}
      {details && details.media_type === "tv" && (
        <SerieDetails
          serieData={details as SerieType}
          trailerData={watchTrailer}
          castData={serieCast}
        />
      )}
      {details && details.media_type === "person" && (
        <PersonDetails
          personData={details as PersonType}
          creditData={credits}
        />
      )}
      {!details && <Loading />}
    </>
  );
};
