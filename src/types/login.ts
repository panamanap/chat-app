export interface UserState {
    email: string;
    password: string;
}

export enum LoginActionType {
    CREATE_USER = 'CREATE_USER',
}

export interface CreateUser {
    type: LoginActionType.CREATE_USER;
    payload: UserState;
}

export type LoginAction = CreateUser;
