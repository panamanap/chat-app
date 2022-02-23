import { SidebarActionType } from './../../types/sidebar';

export const searchDialog = (payload: string) => ({
    type: SidebarActionType.SEARCH_DIALOG,
    payload
})