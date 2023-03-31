import { SerieType, MovieType, PersonType } from "../types/SearchType";
import { ActionType } from "../types/ActionType";

export type MediaType = MovieType | SerieType | PersonType;

export type FavoritesType = {
    listFavorites: MediaType[];
};  

export const favoritesInitialState: FavoritesType = {
    listFavorites: [],
};

export const favoritesReducer = (state: FavoritesType, action: ActionType): FavoritesType => {
  switch (action.type) {
    case "ADD_FAVORITE":
      // Verifica se o item já está na lista de favoritos
      const isAlreadyInFavorites = state.listFavorites.some(
        (item) => item.id === action.payload.listFavorites.id
      );

      // Se o item já estiver na lista, retorna o estado atual
      if (isAlreadyInFavorites) {
        return state;
      }

      // Caso contrário, adiciona o item à lista de favoritos
      return { 
        ...state, 
        listFavorites: 
        [...state.listFavorites, action.payload.listFavorites] 
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        listFavorites: state.listFavorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

