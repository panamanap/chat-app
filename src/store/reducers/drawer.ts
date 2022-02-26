import { DrawerState, DrawerAction, DrawerActionType} from './../../types/drawer';

const initialState: DrawerState = {
    openDrawer: false,
};

export const drawer = (state = initialState, action: DrawerAction) => {
    switch (action.type) {
        case DrawerActionType.OPEN_DRAWER:
            return { ...state, openDrawer: action.payload };
        default: 
            return state;
    }
};
