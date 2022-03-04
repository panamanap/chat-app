import React from 'react';
import { Header } from '../Header';
import './DialogContent.scss';
import { FormMessage } from '../FormMessage/FormMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    selectGetColor,
    selectOpenColorMenu,
    selectOpenDialogMenu,
} from '../../store/selectors/dialogs';
import { useDispatch } from 'react-redux';
import {
    getColor,
    openColorMenu,
    openDialogMenu,
    openProfileModal,
} from '../../store/actions/dialog';
import { ProfileInfo } from '../ProfileInfo';
import { AdditionalMenu } from '../AdditionalMenu';
import { openProfileMenu } from '../../store/actions/profile';
import { selectOpenProfileMenu } from '../../store/selectors/profile';
import { BACKGROUND_COLOR } from '../../utils/constants';
import { ColorMenu } from '../ColorMenu';
import { MenuItem } from '../UI/MenuItem';

export const DialogContent = () => {
    const dispatch = useDispatch();

    const backgroundColor = localStorage.getItem(BACKGROUND_COLOR);

    const showDialogMenu = useTypedSelector(selectOpenDialogMenu);
    const showProfileMenu = useTypedSelector(selectOpenProfileMenu);
    const showColorMenu = useTypedSelector(selectOpenColorMenu);
    const dialogBackground = useTypedSelector(selectGetColor);

    const onCloseMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLImageElement).className === 'more') {
            return;
        }
        if (showDialogMenu) {
            dispatch(openDialogMenu(false));
        }
        if (showProfileMenu) {
            dispatch(openProfileMenu(false));
        }
        if (showColorMenu) {
            dispatch(openDialogMenu(false));
        }
    };

    const onOpenProfile = () => {
        dispatch(openProfileModal(true));
        dispatch(openDialogMenu(false));
    };

    const onOpenDialogMenu = () => {
        if (showDialogMenu) {
            dispatch(openDialogMenu(false));
            return;
        }
        dispatch(openDialogMenu(true));
        dispatch(openColorMenu(false));
    };

    const onOpenColor = () => {
        dispatch(openColorMenu(true));
    };

    const onGetColor = (value: string) => {
        if (value) {
            dispatch(getColor(value));
        }
    };

    const onResetColor = () => {
        dispatch(getColor('#C6D8FF'));
        dispatch(openDialogMenu(false));
    };

    const onClickButton = () => {};

    return (
        <div
            className="content"
            onClick={onCloseMenu}
            style={{
                backgroundColor: `${backgroundColor || dialogBackground}`,
            }}
        >
            <Header
                title={
                    <ProfileInfo
                        name="Иванов Иван"
                        title="last seen recently"
                        avatar=""
                        type="title"
                        onClick={onOpenProfile}
                    />
                }
                buttons={[
                    {
                        path: 'assets/call.svg',
                        alt: 'call',
                        onClick: onClickButton,
                        size: 23,
                    },
                    {
                        path: 'assets/search.svg',
                        alt: 'search',
                        onClick: onClickButton,
                        size: 21,
                    },
                    {
                        path: 'assets/more.svg',
                        alt: 'more',
                        onClick: onOpenDialogMenu,
                        size: 20,
                    },
                ]}
                type="dialog"
            >
                <AdditionalMenu type='dialogContent' condition={showDialogMenu}>
                    {showColorMenu ? (
                        <ColorMenu
                            onGetColor={onGetColor}
                            backgroundColor={backgroundColor}
                            dialogBackground={dialogBackground}
                            onResetColor={onResetColor}
                        />
                    ) : (
                        <>
                            <MenuItem
                                title="Viev profile"
                                path="/assets/user.svg"
                                alt="user"
                                onClick={onOpenProfile}
                            />
                            <MenuItem
                                title="Change colors"
                                path="/assets/brush.svg"
                                alt="brush"
                                onClick={onOpenColor}
                            />
                            <MenuItem
                                title="Clear history"
                                path="/assets/broom.svg"
                                alt="broom"
                            />
                            <MenuItem
                                title="Delete chat"
                                path="/assets/trash.svg"
                                alt="trash"
                            />
                        </>
                    )}
                </AdditionalMenu>
            </Header>
            <FormMessage />
        </div>
    );
};
