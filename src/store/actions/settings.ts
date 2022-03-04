import { SettingsActionType } from './../../types/settings';

export const openSettingsMenu = (payload: boolean) => ({
    type: SettingsActionType.OPEN_SETTINGS_MENU,
    payload,
});
