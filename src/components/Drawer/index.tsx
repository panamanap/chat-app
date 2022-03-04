import React from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    openCalls,
    openContacts,
    openDrawer,
    openSettings,
} from '../../store/actions/drawer';
import { selectGetColor } from '../../store/selectors/dialogs';
import { BACKGROUND_COLOR } from '../../utils/constants';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MenuList } from '../MenuList';
import { ProfileInfo } from '../ProfileInfo';
import './Drawer.scss';

interface DrawerProps {
    condition: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({ condition }) => {
    const dispatch = useDispatch();

    const backgroundColor = useTypedSelector(selectGetColor);

    const onCloseDrawer = () => {
        dispatch(openDrawer(false));
    };

    const onOpenSettings = () => {
        dispatch(openDrawer(false));
        dispatch(openSettings(true));
    };

    const onOpenContacts = () => {
        dispatch(openDrawer(false));
        dispatch(openContacts(true));
    };

    const onOpenCalls = () => {
        dispatch(openDrawer(false));
        dispatch(openCalls(true));
    };

    return (
        <CSSTransition
            in={condition}
            timeout={500}
            unmountOnExit
            classNames="transitionDrawer"
        >
            <div className="drawer-wrapper" onClick={onCloseDrawer}>
                <div
                    className="drawer"
                    onClick={(event) => event.stopPropagation()}
                >
                    <Header
                        title={
                            <ProfileInfo
                                avatar=""
                                name="Иванов Иван"
                                type="profile"
                                title=""
                            />
                        }
                        type="profile"
                        style={{
                            backgroundColor: `${
                                localStorage.getItem(BACKGROUND_COLOR) ||
                                backgroundColor
                            }`,
                        }}
                    />
                    <MenuList
                        menu={[
                            {
                                title: 'Contacts',
                                path: '/assets/contact.svg',
                                alt: 'contacts',
                                onClick: onOpenContacts,
                            },
                            {
                                title: 'Calls',
                                path: '/assets/call.svg',
                                alt: 'call',
                                onClick: onOpenCalls,
                            },
                            {
                                title: 'Games',
                                path: '/assets/games.svg',
                                alt: 'contacts',
                            },
                            {
                                title: 'Music',
                                path: '/assets/music.svg',
                                alt: 'music',
                            },
                            {
                                title: 'Settings',
                                path: '/assets/settings.svg',
                                alt: 'settings',
                                onClick: onOpenSettings,
                            },
                            {
                                title: 'Night mode',
                                path: '/assets/moon.svg',
                                alt: 'night',
                            },
                        ]}
                    />
                    <Footer />
                </div>
            </div>
        </CSSTransition>
    );
};
