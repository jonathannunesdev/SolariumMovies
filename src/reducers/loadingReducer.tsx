import { ActionType } from "../types/ActionType";

export type LoadingType = {
  isLoading: boolean;
};

export const loadingInitialState: LoadingType = {
  isLoading: false,
};

// Função reducer para a atualização do estado de carregamento no contexto global
export const loadingReducer = (state: LoadingType, action: ActionType) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload.isLoading };
  }
  return state;
};
