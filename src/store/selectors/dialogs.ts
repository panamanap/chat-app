import { RootState } from './../reducers/index';

export const selectOpenDialogMenu = (state: RootState) =>
    state.dialog.openDialogMenu;
export const selectOpenModalProfile = (state: RootState) =>
    state.dialog.openProfileModal;
