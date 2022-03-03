import React from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { openDrawer } from '../../store/actions/drawer';
import { selectGetColor } from '../../store/selectors/dialogs';
import { BACKGROUND_COLOR } from '../../utils/constants';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { ProfileInfo } from '../ProfileInfo';
import { MenuItem } from '../UI/MenuItem';
import './Drawer.scss';

interface DrawerProps {
    condition: boolean;
}

const imageSize = 35;

export const Drawer: React.FC<DrawerProps> = ({ condition }) => {
    const dispatch = useDispatch();

    const backgroundColor = useTypedSelector(selectGetColor);

    const onCloseDrawer = () => {
        dispatch(openDrawer(false));
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
                    <div className="navMenu">
                        <MenuItem title="Contacts" path="/assets/contact.svg" alt="contacts" />
                        <MenuItem
                            title="Calls"
                            path="/assets/call.svg"
                            alt="call"
                        />
                        <MenuItem
                            title="Games"
                            path="/assets/games.svg"
                            alt="contacts"
                        />
                        <MenuItem
                            title="Music"
                            path="/assets/music.svg"
                            alt="music"
                        />
                        <MenuItem
                            title="Settings"
                            path="/assets/settings.svg"
                            alt="settings"
                        />
                        <MenuItem
                            title="Night mode"
                            path="/assets/moon.svg"
                            alt="night"
                        />
                    </div>
                    <Footer/>
                </div>
            </div>
        </CSSTransition>
    );
};
