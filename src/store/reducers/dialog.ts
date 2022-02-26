import { BACKGROUND_COLOR } from './../../utils/constants';
import { DialogAction, DialogActionType, DialogState } from './../../types/dialog';

const initialState: DialogState = {
    openDialogMenu: false,
    openProfileModal: false,
    openColorMenu: false,
    color: '#C6D8FF'
}

export const dialog = (state = initialState, action: DialogAction) => {
    switch(action.type) {
        case DialogActionType.OPEN_DIALOG_MENU: 
            return {...state, openDialogMenu: action.payload}
        case DialogActionType.OPEN_PROFILE_MODAL: 
            return {...state,openProfileModal: action.payload}
        case DialogActionType.OPEN_COLOR_MENU: 
            return {...state, openColorMenu: action.payload}
        case DialogActionType.GET_COLOR: 
            localStorage.setItem(BACKGROUND_COLOR, `${action.payload}`)
            return {...state, color: action.payload}
        default: 
            return state;
    }
}