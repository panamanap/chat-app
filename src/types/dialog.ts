export interface DialogState {
    openDialogMenu: boolean;
    openProfileModal: boolean;
}

export enum DialogActionType {
    OPEN_DIALOG_MENU = 'OPEN_DIALOG_MENU',
    OPEN_PROFILE_MODAL = 'OPEN_PROFILE_MODAL',
}

export interface OpenDialogMenu {
    type: DialogActionType.OPEN_DIALOG_MENU;
    payload: boolean;
}

export interface OpenProfileModal {
    type: DialogActionType.OPEN_PROFILE_MODAL;
    payload: boolean;
}

export type DialogAction = OpenDialogMenu | OpenProfileModal;
