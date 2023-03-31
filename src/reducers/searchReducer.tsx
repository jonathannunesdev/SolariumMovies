import { ActionType } from "../types/ActionType";
import { MovieType as SearchType } from "../types/SearchType";

export type SearchState = {
  list: {
    results: SearchType[];
  };
  latestList: SearchType[]
};

export const moviesInitialState: SearchState = {
  list: {
    results: [],
  },
  latestList: []
};

// funcao que salva as informacoes da pesquisa no contexto global.
export const searchReducer = (state: SearchState, action: ActionType): SearchState => {
  switch (action.type) {
    case 'SET_MOVIE_LIST':
      return {
        ...state,
        list: action.payload.list,
      };
      case 'SET_LATEST_MOVIE_LIST':
        return {
          ...state,
          latestList: action.payload.latestList.results,
        };      
    default:
      return state;
  }
};
