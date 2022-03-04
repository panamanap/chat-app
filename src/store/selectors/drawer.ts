import { RootState } from '../reducers/index';

export const selectOpenDrawer = (state: RootState) => state.drawer.openDrawer;
export const selectOpenCalls = (state: RootState) => state.drawer.openCalls;
export const selectOpenContacts = (state: RootState) => state.drawer.openContacts;
export const selectOpenSettings = (state: RootState) => state.drawer.openSettings;