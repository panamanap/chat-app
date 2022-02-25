import { ProfileActionType } from './../../types/profile';

export const openProfileMenu = (payload: boolean) => ({
    type: ProfileActionType.OPEN_PROFILE_MENU,
    payload,
});
