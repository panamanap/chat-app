import { USER_DATA, IS_AUTH } from './../../utils/constants';
import {
    LoginAction,
    LoginActionType,
    UserState,
    UserData,
} from './../../types/login';

const initialState: UserState = {
    id: '',
    email: '',
    openRegistration: false,
    isAuth: Boolean(localStorage.getItem(IS_AUTH)) || false,
    isNewAccount: false,
};

export const login = (state = initialState, action: LoginAction) => {
    switch (action.type) {
        case LoginActionType.CREATE_USER:
            if (action.payload.isAuth) {
                localStorage.setItem(IS_AUTH, `${action.payload.isAuth}`);
            } else {
                localStorage.removeItem(IS_AUTH);
                return {
                    ...initialState,
                    openRegistration: true,
                };
            }
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.id,
                isAuth: action.payload.isAuth,
                isNewAccount: action.payload.isNewAccount || false,
            };
        case LoginActionType.OPEN_REGISTRATION:
            return {
                ...state,
                openRegistration: action.payload,
            };
        case LoginActionType.REMOVE_USER:
            localStorage.removeItem(USER_DATA);
            return {
                ...state,
                email: '',
                password: '',
            };
        default:
            return state;
    }
};
