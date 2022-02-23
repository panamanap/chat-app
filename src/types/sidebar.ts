export interface IDialogsItem {
    avatar: string;
    name: string;
    title: string;
}

export enum SidebarActionType {
    SEARCH_DIALOG = 'SEARCH_DIALOG',
}

export interface SearchDialog {
    type: SidebarActionType.SEARCH_DIALOG,
    payload: string,
}

export type SidebarAction = SearchDialog