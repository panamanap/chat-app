import { ProfileAction, ProfileActionType, ProfileState, } from './../../types/profile';

const initialState: ProfileState = {
    openProfileMenu: false,
};

export const profile = (state = initialState, action: ProfileAction) => {
    switch (action.type) {
        case ProfileActionType.OPEN_PROFILE_MENU:
            return { ...state, openProfileMenu: action.payload };
        default: 
            return state;
    }
};
