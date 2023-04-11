// Type de Série
export type SerieType = {
  id: number;
  name: string;
  original_language: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  status: string;
  popularity: number;
  poster_path: string;
  backdrop_path: string;
  number_of_episodes: number;
  in_production: boolean;
  number_of_seasons: number;
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  networks: {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
  }[];
  created_by: {
    id: number;
    name: string;
  }[];
  type: string;
  original_name: string;
  media_type: string;
  certification: string;
  budget?: number;
  revenue?: number;
  tagline: string;
  watchProviders:{
    results: {
      BR?: {
        flatrate?: {
          display_priority?: number;
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
        }[];
      };
    };
  };
};

// Type de Filme
export type MovieType = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  genres: {
    id: number;
    name: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  adult: boolean;
  status: string;
  original_language: string;
  popularity: number;
  type: string;
  media_type: string;
  name: string;
  profile_path: string;
  character?: string;
  credit_id?: string;
  genre_ids?: number[];
  order?: number;
  video?: boolean;
  certification: string;
  budget: number;
  revenue: number;
  tagline: string;
  watchProviders:{
    results: {
      BR?: {
        flatrate?: {
          display_priority?: number;
          logo_path?: string;
          provider_id?: number;
          provider_name?: string;
        }[];
      };
    };
  };
};


//type de pessoa
export type PersonType = {
  adult: boolean;
  gender: number;
  id: number;
  known_for: MovieType[];
  known_for_department: string;
  media_type: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  also_known_as: string[];
  biography: string;
  birthday: string | null;
  deathday: string | null;
  homepage: string | null;
  imdb_id: string | null;
  place_of_birth: string | null;
  external_ids?: {
    facebook_id?: string;
    instagram_id?: string;
    tiktok_id?: string;
    twitter_id?: string;
  }
};

//type de credito
export type CreditType = {
  cast?: MovieType[];
  crew?: CrewType[];
  id?: number;
  media_type?: string;
};

// Type de Trailer
export type TrailerType = {
  id: number;
  name: string;
  key: string;
  site: string;
  type: string;
};

// Type de Item do Carrossel
export type CarouselItemType = {
  id: number;
  title: string;
  poster_path: string;
  media_type: string;
};


export type CastType = {
  adult: boolean;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
  media_type: "person";
};

export type CrewType = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  runtime?: number;
  genres?: {
    id: number;
    name: string;
  }[];
  production_countries?: {
    iso_3166_1: string;
    name: string;
  }[];
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  adult: boolean;
  status?: string;
  original_language: string;
  popularity: number;
  type?: string;
  media_type: string;
  name?: string;
  profile_path?: string;
  job: string;
  department: string;
  credit_id: string;
  genre_ids: number[];
};
