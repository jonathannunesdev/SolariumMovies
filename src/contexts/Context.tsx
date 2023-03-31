import React, { createContext, ElementType, useReducer } from "react";
import { themeType, themeInitialState, themeReducer } from "../reducers/themeReducer";
import { searchReducer, SearchState, moviesInitialState } from "../reducers/searchReducer";
import { userReducer, userInitialState, UserType } from "../reducers/userReducer";
import { loadingReducer, LoadingType, loadingInitialState } from "../reducers/loadingReducer";
import { favoritesReducer, FavoritesType, favoritesInitialState } from "../reducers/favoritesReducer";

export type InitialStateType = {
  theme: themeType;
  search: SearchState;
  user: UserType;
  loading: LoadingType;
  favorites: FavoritesType; 
};

export const InitialState: InitialStateType = {
  theme: themeInitialState,
  search: moviesInitialState,
  user: userInitialState,
  loading: loadingInitialState,
  favorites: favoritesInitialState, 
};

export type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
};

export const Context = createContext<ContextType>({
  state: InitialState,
  dispatch: () => null,
});

export const MainReducer = (state: InitialStateType, action: any): InitialStateType => ({
  theme: themeReducer(state.theme, action),
  search: searchReducer(state.search, action),
  user: userReducer(state.user, action),
  loading: loadingReducer(state.loading, action),
  favorites: favoritesReducer(state.favorites, action), 
});

export const ContextProvider: ElementType = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, InitialState);

  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};
