import { RootState } from './../reducers/index';

export const selectOpenRegistration = (state: RootState) =>
    state.login.openRegistration;
export const selectId = (state: RootState) => state.login.id;
export const selectIsAuth = (state: RootState) => state.login.isAuth;