import { RootState } from './../reducers/index';

export const selectOpenSettingsMenu = (state: RootState) =>
    state.settings.openSettingsMenu;
