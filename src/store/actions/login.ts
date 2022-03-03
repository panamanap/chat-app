import { LoginActionType, UserState } from './../../types/login';

export const createUser = (payload: UserState) => ({
    type: LoginActionType.CREATE_USER,
    payload,
})