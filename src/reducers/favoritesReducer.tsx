import { SerieType, MovieType, PersonType } from "../types/SearchType";
import { ActionType } from "../types/ActionType";

export type MediaType = MovieType | SerieType | PersonType;

export type FavoritesType = {
    listFavorites: MediaType[];
};  

export const favoritesInitialState: FavoritesType = {
  listFavorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const saveFavoritesToLocalStorage = (favorites: MediaType[]) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};


export const favoritesReducer = (
  state: FavoritesType,
  action: ActionType
): FavoritesType => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const isAlreadyInFavorites = state.listFavorites.some(
        (item) => item.id === action.payload.listFavorites.id
      );

      if (isAlreadyInFavorites) {
        return state;
      }

      const newFavorites = [
        ...state.listFavorites,
        action.payload.listFavorites,
      ];
      saveFavoritesToLocalStorage(newFavorites);

      return {
        ...state,
        listFavorites: newFavorites,
      };
    case "REMOVE_FAVORITE":
      const updatedFavorites = state.listFavorites.filter(
        (item) => item.id !== action.payload.id
      );
      saveFavoritesToLocalStorage(updatedFavorites);

      return {
        ...state,
        listFavorites: updatedFavorites,
      };
    case "CLEAR_FAVORITES":
      localStorage.removeItem("favorites");
      return {
        ...state,
        listFavorites: [],
      };
    default:
      return state;
  }
};


