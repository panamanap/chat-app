import { dialog } from './dialog';
import { sidebar } from './sidebar';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    sidebar,
    dialog
})

export type RootState = ReturnType<typeof rootReducer>;