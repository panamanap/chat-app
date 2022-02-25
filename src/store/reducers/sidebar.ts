import { SidebarAction, SidebarActionType, IDialogsItem } from './../../types/sidebar';

const initialState: IDialogsItem[] = [
    { id: 1, avatar: 'avatar', name: 'Иванов Иван', title: 'Привет' },
    { id: 2, avatar: 'avatar', name: 'Петров Петя', title: 'Привет' },
    { id: 3, avatar: 'avatar', name: 'Андреев Андрей', title: 'Привет' },
];

export const sidebar = (state = initialState, action: SidebarAction) => {
    switch (action.type) {
        case SidebarActionType.SEARCH_DIALOG:
            if (!action.payload) {
                return initialState;
            }
            const newState = state.filter((user) =>
                user.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            return newState;
        default:
            return state;
    }
};
