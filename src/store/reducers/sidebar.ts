import { IProfileInfo } from '../../types/profile';
import { SidebarAction, SidebarActionType } from '../../types/sidebar';

const initialState: IProfileInfo[] = [
    { id: 1, avatar: '', name: 'Иванов Иван', title: 'Привет' },
    { id: 2, avatar: '', name: 'Петров Петя', title: 'Привет' },
    { id: 3, avatar: '', name: 'Андреев Андрей', title: 'Привет' },
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
