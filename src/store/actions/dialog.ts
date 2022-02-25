import { DialogActionType } from './../../types/dialog';

export const openDialogMenu = (payload: boolean) => ({
    type: DialogActionType.OPEN_DIALOG_MENU,
    payload
})

export const openProfileModal = (payload: boolean) => ({
    type: DialogActionType.OPEN_PROFILE_MODAL,
    payload,
}) 