export interface IProfileInfo {
    id: number;
    avatar: string;
    name: string;
    title: string;
}

export interface ProfileState {
    openProfileMenu: boolean
}

export enum ProfileActionType {
    OPEN_PROFILE_MENU = 'OPEN_PROFILE_MENU'
}

export interface OpenProfileMenu {
    type: ProfileActionType.OPEN_PROFILE_MENU;
    payload: boolean;
}

export type ProfileAction = OpenProfileMenu