import { login } from './login';
import { drawer } from './drawer';
import { profile } from './profile';
import { dialog } from './dialog';
import { sidebar } from './sidebar';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    sidebar,
    dialog,
    profile,
    drawer,
    login
})

export type RootState = ReturnType<typeof rootReducer>;