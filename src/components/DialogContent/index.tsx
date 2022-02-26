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
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button';
import { BACKGROUND_COLOR } from '../../utils/constants';

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

    const openProfile = () => {
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
                        onClick={openProfile}
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
                <AdditionalMenu top={60} right={40} condition={showDialogMenu}>
                    {showColorMenu ? (
                        <span className="colorWrapper">
                            <h4>Selected color: </h4>
                            <Input
                                onChange={onGetColor}
                                type="color"
                                defaultColor={
                                    backgroundColor || dialogBackground
                                }
                            />
                            <Button onClick={onResetColor}>Reset</Button>
                        </span>
                    ) : (
                        <>
                            <p onClick={openProfile}>Viev profile</p>
                            <p onClick={onOpenColor}>Change colors</p>
                            <p>Clear history</p>
                            <p>Delete chat </p>
                        </>
                    )}
                </AdditionalMenu>
            </Header>
            <FormMessage />
        </div>
    );
};
