export interface UserData {
    email: string;
    password: string;
}

export interface UserState {
    id: string;
    email: string | null;
    openRegistration?: boolean
}

export enum LoginActionType {
    CREATE_USER = 'CREATE_USER',
    OPEN_REGISTRATION = 'OPEN_REGISTRATION',
    REMOVE_USER = 'REMOVE_USER',
}

export interface CreateUser {
    type: LoginActionType.CREATE_USER;
    payload: UserState;
}

export interface OpenRegistration {
    type: LoginActionType.OPEN_REGISTRATION,
    payload: boolean
}

export interface RemoveUser {
    type: LoginActionType.REMOVE_USER;
    payload: UserState;
}

export type LoginAction = CreateUser | OpenRegistration | RemoveUser;
