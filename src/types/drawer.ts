export interface DrawerState {
    openDrawer: boolean;
    openContacts: boolean;
    openCalls: boolean;
    openSettings: boolean;
}

export enum DrawerActionType {
    OPEN_DRAWER = 'OPEN_DRAWER',
    OPEN_CONTACTS = 'OPEN_CONTACTS',
    OPEN_CALLS = 'OPEN_CALLS',
    OPEN_SETTINGS = 'OPEN_SETTINGS',
}

export interface OpenDrawer {
    type: DrawerActionType.OPEN_DRAWER;
    payload: boolean;
}

export interface OpenContacts {
    type: DrawerActionType.OPEN_CONTACTS;
    payload: boolean;
}

export interface OpenCalls {
    type: DrawerActionType.OPEN_CALLS;
    payload: boolean;
}

export interface OpenSettings {
    type: DrawerActionType.OPEN_SETTINGS;
    payload: boolean;
}

export type DrawerAction = OpenDrawer | OpenContacts | OpenCalls | OpenSettings;
