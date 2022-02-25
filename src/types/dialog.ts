export interface DialogState {
    openAdditionalMenu: boolean,
}

export enum DialogActionType {
    OPEN_ADDITIONAL_MENU = 'OPEN_ADDITIONAL_MENU',
}

export interface OpenAdditionalMenu {
    type: DialogActionType.OPEN_ADDITIONAL_MENU;
    payload: boolean;
}

export type DialogAction = OpenAdditionalMenu;
