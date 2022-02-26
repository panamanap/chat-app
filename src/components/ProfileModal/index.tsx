import React from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { openProfileModal } from '../../store/actions/dialog';
import { openProfileMenu } from '../../store/actions/profile';
import { selectOpenProfileModal } from '../../store/selectors/dialogs';
import { selectOpenProfileMenu } from '../../store/selectors/profile';
import { AdditionalMenu } from '../AdditionalMenu';
import { Header } from '../Header';
import { ProfileInfo } from '../ProfileInfo';
import './ProfileModal.scss';

export const ProfileModal = () => {
    const dispatch = useDispatch();

    const showProfile = useTypedSelector(selectOpenProfileModal);
    const showMenu = useTypedSelector(selectOpenProfileMenu);

    const onClick = () => {};

    const onCloseProfile = () => {
        dispatch(openProfileModal(false));
    };

    const onOpenMenu = () => {
        if (showMenu) {
            dispatch(openProfileMenu(false));
            return;
        }
        dispatch(openProfileMenu(true));
    };

    return (
        <CSSTransition
            in={showProfile}
            timeout={500}
            unmountOnExit
            classNames="transitionProfile"
        >
            <div className="profileWrapper" onClick={onCloseProfile}>
                <div
                    className="profile"
                    onClick={(event) => event.stopPropagation()}
                >
                    <Header
                        title="User Info"
                        buttons={[
                            {
                                path: '/assets/call.svg',
                                alt: 'call',
                                onClick: onClick,
                                size: 20,
                            },
                            {
                                path: 'assets/more.svg',
                                alt: 'more',
                                onClick: onOpenMenu,
                                size: 17,
                            },
                            {
                                path: '/assets/cross.svg',
                                alt: 'cross',
                                onClick: onCloseProfile,
                                size: 20,
                            },
                        ]}
                        type="modal"
                    >
                        <AdditionalMenu
                            top={30}
                            right={45}
                            condition={showMenu}
                        >
                            <li>Viev profile</li>
                            <li>Change colors</li>
                            <li>Clear history</li>
                            <li>Delete chat </li>
                        </AdditionalMenu>
                    </Header>
                    <ProfileInfo
                        name="Иванов Иван"
                        title="last seen recently"
                        avatar=""
                        type="modal"
                    />
                    <div className="additionalInfo">
                        <p>UserName</p>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};
