import axios from 'axios';
import { CarouselItemType, CastType, MovieType, SerieType } from '../types/SearchType';

const http = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export const Api = {
    // Api responsavel pela busca de filmes, séries e pessoas pelo título.
    getMoviesSeriesAndPeople: async (title: string) => {
        const req = await http.get(`/search/multi?api_key=c6944c2ed79362c4d24703a02fc2cc54&query=${title}&language=pt-BR`);
        return req.data;
    },
    // Busca os filmes em cartaz.    
    getLatestMovies: async () => {
        const req = await http.get(`/movie/now_playing?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const latestMovies = { ...req.data, media_type: 'movie' }; 
        return latestMovies;
    },
    // Busca os filmes populares.
    getPopularMovies: async () => {
        const req = await http.get(`/movie/popular?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const popularMovies = { ...req.data, media_type: 'movie' }; 
        return popularMovies;
    },
    // Busca as 10 novidades entre filmes e series.
    getLatestMoviesAndSeries: async () => {
        const moviesReq = await http.get(`/movie/now_playing?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const seriesReq = await http.get(`/tv/on_the_air?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);

        const latestMovies = moviesReq.data.results.slice(0, 5).map((movie: CarouselItemType) => ({ ...movie, media_type: 'movie' }));
        const latestSeries = seriesReq.data.results.slice(0, 5).map((serie: CarouselItemType) => ({ ...serie, media_type: 'tv' }));

        const latestMoviesAndSeries = [...latestMovies, ...latestSeries];
        return latestMoviesAndSeries;
    },
    // Busca os detalhes de um filme pelo ID.
    getMovieDetails: async (movieId: number) => {
        const req = await http.get(`/movie/${movieId}?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const movieData = { ...req.data, media_type: 'movie' };       
        return movieData;
    },
    // Busca os detalhes de uma série pelo ID
    getSeriesDetails: async (seriesId: number) => {
        const req = await http.get(`/tv/${seriesId}?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const seriesData = { ...req.data, media_type: 'tv' };
        return seriesData;
    },
     // Busca os detalhes de uma pessoa pelo ID.
    getPersonDetails: async (personId: number) => {
        const req = await http.get(`/person/${personId}?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const personData = { ...req.data, media_type: 'person' };
        return personData;
    },
     // Busca trailers de um filme pelo ID      
    getMovieTrailers: async (movieId: number) => {
        const req = await http.get(`/movie/${movieId}/videos?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        return req.data.results;
    },
    // Busca trailers de uma série pelo ID
    getSeriesTrailers: async (seriesId: number) => {
    const req = await http.get(`/tv/${seriesId}/videos?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
    return req.data.results;
    },
    
    // Busca créditos de filmes de uma pessoa pelo ID
    getMoviesCreditsPerson: async (personId: Number) => {
        const req = await http.get(`https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const castData = req.data.cast.map((item: MovieType) => {
          return { ...item, media_type: 'movie' };
        });
        return { ...req.data, cast: castData };
    },
    // Busca créditos de séries de uma pessoa pelo ID
    getSeriesCreditsPerson: async (personId: Number) => {
        const req = await http.get(`https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const castData = req.data.cast.map((item: SerieType) => {
          return { ...item, media_type: 'tv' };
        });
        return { ...req.data, cast: castData };
    },
    // Busca elenco de um filme pelo ID
    getMovieCast: async (movieId: number) => {
        const req = await http.get(`/movie/${movieId}/credits?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const castData = req.data.cast.map((item: CastType) => {
          return { ...item, media_type: 'person' };
        });
        return castData;
    },
     // Busca elenco de uma série pelo ID
    getSerieCast: async (serieId: number) => {
        const req = await http.get(`/tv/${serieId}/credits?api_key=c6944c2ed79362c4d24703a02fc2cc54&language=pt-BR`);
        const castData = req.data.cast.map((item: CastType) => {
          return { ...item, media_type: 'person' };
        });
        return castData;
    }   
        
};
