import {
    DrawerState,
    DrawerAction,
    DrawerActionType,
} from './../../types/drawer';

const initialState: DrawerState = {
    openDrawer: false,
    openCalls: false,
    openContacts: false,
    openSettings: false,
};

export const drawer = (state = initialState, action: DrawerAction) => {
    switch (action.type) {
        case DrawerActionType.OPEN_DRAWER:
            return { ...state, openDrawer: action.payload };
        case DrawerActionType.OPEN_CALLS:
            return { ...state, openCalls: action.payload };
        case DrawerActionType.OPEN_CONTACTS:
            return { ...state, openContacts: action.payload };
        case DrawerActionType.OPEN_SETTINGS:
            return { ...state, openSettings: action.payload };
        default:
            return state;
    }
};
