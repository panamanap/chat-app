import { DialogAction, DialogActionType, DialogState } from './../../types/dialog';

const initialState: DialogState = {
    openAdditionalMenu: false,
}

export const dialog = (state = initialState, action: DialogAction) => {
    switch(action.type) {
        case DialogActionType.OPEN_ADDITIONAL_MENU: 
            return {...state, openAdditionalMenu: action.payload}
        default: 
            return state;
    }
}