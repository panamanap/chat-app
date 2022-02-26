export interface DialogState {
    openDialogMenu: boolean;
    openProfileModal: boolean;
    openColorMenu: boolean;
    color: string;
}

export enum DialogActionType {
    OPEN_DIALOG_MENU = 'OPEN_DIALOG_MENU',
    OPEN_PROFILE_MODAL = 'OPEN_PROFILE_MODAL',
    OPEN_COLOR_MENU = 'OPEN_COLOR_MENU',
    GET_COLOR = 'GET_COLOR',
}

export interface OpenDialogMenu {
    type: DialogActionType.OPEN_DIALOG_MENU;
    payload: boolean;
}

export interface OpenProfileModal {
    type: DialogActionType.OPEN_PROFILE_MODAL;
    payload: boolean;
}

export interface OpenColorMenu {
    type: DialogActionType.OPEN_COLOR_MENU;
    payload: boolean
}

export interface GetColor {
    type: DialogActionType.GET_COLOR;
    payload: string
}

export type DialogAction = OpenDialogMenu | OpenProfileModal | OpenColorMenu | GetColor;
