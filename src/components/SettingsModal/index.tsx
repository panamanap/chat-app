import { signOut } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { openSettings } from '../../store/actions/drawer';
import { createUser } from '../../store/actions/login';
import { openSettingsMenu } from '../../store/actions/settings';
import { selectOpenSettings } from '../../store/selectors/drawer';
import { selectOpenSettingsMenu } from '../../store/selectors/settings';
import { auth } from '../../utils/firebase-config';
import { AdditionalMenu } from '../AdditionalMenu';
import { Header } from '../Header';
import { MenuList } from '../MenuList';
import { ModalWindow } from '../ModalWindow';
import { ProfileInfo } from '../ProfileInfo';
import { MenuItem } from '../UI/MenuItem';

export const SettingsModal = () => {
    const showSettings = useTypedSelector(selectOpenSettings);
    const showMenu = useTypedSelector(selectOpenSettingsMenu);

    const dispatch = useDispatch();

    const onCloseSettings = () => {
        dispatch(openSettings(false));
    };

    const onOpenMenu = () => {
        if (showMenu) {
            dispatch(openSettingsMenu(false));
            return;
        }
        dispatch(openSettingsMenu(true));
    };

    const onCloseMenu = () => {
        dispatch(openSettingsMenu(false));
    };

    const onLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log('aaaaa');
                dispatch(createUser({ id: '', email:'', isAuth: false }));
                dispatch(openSettingsMenu(false))
                dispatch(openSettings(false))
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <ModalWindow
            condition={showSettings}
            onCloseModal={onCloseSettings}
            onCloseMenu={onCloseMenu}
        >
            <>
                <Header
                    title="Settings"
                    type="modal"
                    buttons={[
                        {
                            path: 'assets/more.svg',
                            alt: 'more',
                            onClick: onOpenMenu,
                            size: 17,
                        },
                        {
                            path: '/assets/cross.svg',
                            alt: 'cross',
                            onClick: onCloseSettings,
                            size: 20,
                        },
                    ]}
                >
                    <AdditionalMenu type="modal" condition={showMenu}>
                        <MenuItem
                            path="/assets/circle.svg"
                            alt="edit"
                            title="Edit profile"
                        />
                        <MenuItem
                            path="/assets/logOut.svg"
                            alt="Log out"
                            title="Log out"
                            onClick={onLogOut}
                        />
                    </AdditionalMenu>
                </Header>
                <ProfileInfo
                    type="modal"
                    title="last seen recently"
                    avatar=""
                    name="Иванов Иван"
                />
                <MenuList
                    type="settings"
                    menu={[
                        {
                            title: 'Edit profile',
                            path: '/assets/circle.svg',
                            alt: 'circle',
                        },
                        {
                            title: 'Chat Settings',
                            path: '/assets/message.svg',
                            alt: 'message',
                        },
                        {
                            title: 'Advanced',
                            path: '/assets/advanced.svg',
                            alt: 'advanced',
                        },
                        {
                            title: 'Language',
                            path: '/assets/language.svg',
                            alt: 'language',
                        },
                    ]}
                />
            </>
        </ModalWindow>
    );
};
