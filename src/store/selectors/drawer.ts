import { RootState } from '../reducers/index';

export const selectOpenDrawer = (state: RootState) => state.drawer.openDrawer;