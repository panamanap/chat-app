import { createNewUser } from './../../utils/createNewUser';
import { LoginAction, LoginActionType, UserState } from './../../types/login';

const initialState: UserState = {
    email: '',
    password: '',
};

export const login = (state = initialState, action: LoginAction) => {
    switch (action.type) {
        case LoginActionType.CREATE_USER:
            createNewUser(action.payload)          
            return state;
        default: 
            return state;
    }
};
