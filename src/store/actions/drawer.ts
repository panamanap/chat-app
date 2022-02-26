import { DrawerActionType } from './../../types/drawer';

export const openDrawer = (payload: boolean) => ({
    type: DrawerActionType.OPEN_DRAWER,
    payload,
});
