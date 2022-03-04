import { login } from './login';
import { drawer } from './drawer';
import { profile } from './profile';
import { dialog } from './dialog';
import { sidebar } from './sidebar';
import { settings } from './settings';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    sidebar,
    dialog,
    profile,
    drawer,
    login,
    settings
})

export type RootState = ReturnType<typeof rootReducer>;