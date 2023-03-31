import { ActionType } from "../types/ActionType";

export type themeType = {
    status: 'light' | 'dark';
};

export const themeInitialState: themeType = {
    status: 'dark'
};

// função reducer para a para atualização dos dados de tema no context global
export const themeReducer = (state: themeType, action:ActionType) => {
    switch(action.type){
        case 'CHANGE_THEME':
            return {...state, status: action.payload.status};
    }
    return state
};
