import { SettingsState, SettingsAction, SettingsActionType } from './../../types/settings';

const initialState: SettingsState = {
    openSettingsMenu: false,
};

export const settings = (state = initialState, action: SettingsAction) => {
    switch (action.type) {
        case SettingsActionType.OPEN_SETTINGS_MENU:
            return { ...state, openSettingsMenu: action.payload };
        default: 
            return state;
    }
};
