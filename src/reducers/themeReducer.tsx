import { ActionType } from "../types/ActionType";

export type themeType = {
    status: 'light' | 'dark';
};

export const themeInitialState: themeType = {
    status: localStorage.getItem("theme") as 'light' | 'dark' || 'dark',
  };
  

// função reducer para a para atualização dos dados de tema no context global
export const themeReducer = (state: themeType, action: ActionType) => {
    switch (action.type) {
      case "CHANGE_THEME":
        localStorage.setItem("theme", action.payload.status);
        return { ...state, status: action.payload.status };
    }
    return state;
  };
  