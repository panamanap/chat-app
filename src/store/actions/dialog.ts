import { DialogActionType } from './../../types/dialog';

export const openAdditionalMenu = (payload: boolean) => ({
    type: DialogActionType.OPEN_ADDITIONAL_MENU,
    payload
})