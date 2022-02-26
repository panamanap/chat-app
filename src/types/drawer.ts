export interface DrawerState {
    openDrawer: boolean
}

export enum DrawerActionType {
    OPEN_DRAWER = 'OPEN_DRAWER',
}

export interface OpenDrawer {
    type: DrawerActionType.OPEN_DRAWER;
    payload: boolean;
}

export type DrawerAction = OpenDrawer;
