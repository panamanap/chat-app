export enum SidebarActionType {
    SEARCH_DIALOG = 'SEARCH_DIALOG',
    OPEN_PROILE = 'OPEN_PROFILE',
}

export interface SearchDialog {
    type: SidebarActionType.SEARCH_DIALOG;
    payload: string;
}



export type SidebarAction = SearchDialog;
