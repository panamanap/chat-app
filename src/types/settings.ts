export interface SettingsState {
    openSettingsMenu: boolean
}

export enum SettingsActionType {
    OPEN_SETTINGS_MENU = 'OPEN_SETTINGS_MENU'
}

export interface OpenSettingsMenu {
    type: SettingsActionType.OPEN_SETTINGS_MENU;
    payload: boolean;
}

export type SettingsAction = OpenSettingsMenu