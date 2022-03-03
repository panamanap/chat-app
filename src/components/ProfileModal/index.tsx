import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { openProfileModal } from '../../store/actions/dialog';
import { openProfileMenu } from '../../store/actions/profile';
import { selectOpenProfileModal } from '../../store/selectors/dialogs';
import { selectOpenProfileMenu } from '../../store/selectors/profile';
import { AdditionalMenu } from '../AdditionalMenu';
import { Header } from '../Header';
import { ModalWindow } from '../ModalWindow';
import { ProfileInfo } from '../ProfileInfo';
import { MenuItem } from '../UI/MenuItem';
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
        <ModalWindow condition={showProfile}>
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
                            <MenuItem
                                path="/assets/edit.svg"
                                alt="edit"
                                title="Edit contact"
                            />
                            <MenuItem
                                path="/assets/block.svg"
                                alt="block"
                                title="Block user"
                            />
                            <MenuItem
                                path="/assets/trash.svg"
                                alt="trash"
                                title="Delete chat"
                            />
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
        </ModalWindow>
    );
};
