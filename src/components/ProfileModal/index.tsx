import React from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { openDialogMenu, openProfileModal } from '../../store/actions/dialog';
import { openProfileMenu } from '../../store/actions/profile';
import { selectOpenModalProfile } from '../../store/selectors/dialogs';
import { selectOpenProfileMenu } from '../../store/selectors/profile';
import { AdditionalMenu } from '../AdditionalMenu';
import { Header } from '../Header';
import { ProfileInfo } from '../ProfileInfo';
import './ProfileModal.scss';

export const ProfileModal = () => {
    const dispatch = useDispatch();

    const showProfile = useTypedSelector(selectOpenModalProfile);
    const showMenu = useTypedSelector(selectOpenProfileMenu);

    console.log(showMenu);

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

    const openProfile = () => {
        dispatch(openProfileModal(true));
        dispatch(openDialogMenu(false));
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
                            right={44}
                            condition={showMenu}
                            onClick={openProfile}
                        />
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
