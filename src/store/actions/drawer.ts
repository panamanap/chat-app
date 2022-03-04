import { DrawerActionType } from './../../types/drawer';

export const openDrawer = (payload: boolean) => ({
    type: DrawerActionType.OPEN_DRAWER,
    payload,
});

export const openContacts = (payload: boolean) => ({
    type: DrawerActionType.OPEN_CONTACTS,
    payload,
});

export const openCalls = (payload: boolean) => ({
    type: DrawerActionType.OPEN_CALLS,
    payload,
});

export const openSettings = (payload: boolean) => ({
    type: DrawerActionType.OPEN_SETTINGS,
    payload,
});
