import { RootState } from './../reducers/index';

export const selectOpenDialogMenu = (state: RootState) =>
    state.dialog.openDialogMenu;
export const selectOpenProfileModal = (state: RootState) =>
    state.dialog.openProfileModal;
export const selectOpenColorMenu = (state: RootState) =>
    state.dialog.openColorMenu;
export const selectGetColor = (state: RootState) => state.dialog.color;
