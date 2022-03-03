import { LoginActionType, UserState } from './../../types/login';

export const createUser = (payload: UserState) => ({
    type: LoginActionType.CREATE_USER,
    payload,
});

export const openRegistration = (payload: boolean) => ({
    type: LoginActionType.OPEN_REGISTRATION,
    payload
})

export const removeUser = (payload: UserState) => ({
    type: LoginActionType.REMOVE_USER,
    payload,
});
