import { DialogAction, DialogActionType, DialogState } from './../../types/dialog';

const initialState: DialogState = {
    openDialogMenu: false,
    openProfileModal: false,
}

export const dialog = (state = initialState, action: DialogAction) => {
    switch(action.type) {
        case DialogActionType.OPEN_DIALOG_MENU: 
            return {...state, openDialogMenu: action.payload}
        case DialogActionType.OPEN_PROFILE_MODAL: 
            return {...state,openProfileModal: action.payload}
        default: 
            return state;
    }
}