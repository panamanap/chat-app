import { sidebar } from './sidebar';
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    sidebar,
})

export type RootState = ReturnType<typeof rootReducer>;