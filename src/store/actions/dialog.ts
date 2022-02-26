import { DialogActionType } from './../../types/dialog';

export const openDialogMenu = (payload: boolean) => ({
    type: DialogActionType.OPEN_DIALOG_MENU,
    payload,
});

export const openProfileModal = (payload: boolean) => ({
    type: DialogActionType.OPEN_PROFILE_MODAL,
    payload,
});

export const openColorMenu = (payload: boolean) => ({
    type: DialogActionType.OPEN_COLOR_MENU,
    payload,
});

export const getColor = (payload: string) => ({
    type: DialogActionType.GET_COLOR,
    payload
})
