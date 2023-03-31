import { ActionType } from "../types/ActionType";


export type UserData = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  isFormSubmitted: boolean;
};

export type UserType = {
  user?: UserData;
};


export const userInitialState: UserType = {
  user: undefined,
};

//funcao que salva as informacoes do usuario no contexto global.
export const userReducer = (state: UserType, action: ActionType): UserType => {
  switch (action.type) {
    case 'SAVE_USER_DATA':
      return {
        ...state,
        user: {
          ...action.payload.user,
          isFormSubmitted: true,
        },
      };
        case 'LOGOUT_USER':
          return {
            ...state,
            user: undefined,
          };
    default:
      return state;
  }
};