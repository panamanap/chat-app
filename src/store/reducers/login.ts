import { USER_DATA } from './../../utils/constants';
import { LoginAction, LoginActionType, UserState, UserData } from './../../types/login';

const initialState: UserState = {
    id: '',
    email: '',
    openRegistration: false,
};

export const login = (state = initialState, action: LoginAction) => {
    switch (action.type) {
        case LoginActionType.CREATE_USER:
            localStorage.setItem(USER_DATA, action.payload.id);
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.id,
            };
        case LoginActionType.OPEN_REGISTRATION:
            return {
                ...state,
                openRegistration: action.payload,
            };
        case LoginActionType.REMOVE_USER:
            localStorage.removeItem(USER_DATA)
            return {
                ...state,
                email: '',
                password: '',
            };
        default:
            return state;
    }
};
