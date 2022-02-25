import React from 'react';
import { Header } from '../Header';
import './DialogContent.scss';
import { FormMessage } from '../FormMessage/FormMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectOpenDialogMenu } from '../../store/selectors/dialogs';
import { useDispatch } from 'react-redux';
import { openDialogMenu, openProfileModal } from '../../store/actions/dialog';
import { ProfileInfo } from '../ProfileInfo';
import { AdditionalMenu } from '../AdditionalMenu';

export const DialogContent = () => {
    const dispatch = useDispatch();
    const showMenu = useTypedSelector(selectOpenDialogMenu);

    const onCloseMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLImageElement).className === 'more') {
            return;
        }
        showMenu && dispatch(openDialogMenu(false));
    };

    const openProfile = () => {
        dispatch(openProfileModal(true));
    };

    const onOpenDialogMenu = () => {
        if (showMenu) {
            dispatch(openDialogMenu(false));
            return;
        }
        dispatch(openDialogMenu(true));
    };

    const onClickButton = () => {};

    return (
        <div className="content" onClick={onCloseMenu}>
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
                <AdditionalMenu
                    top={50}
                    right={44}
                    condition={showMenu}
                    onClick={openProfile}
                />
            </Header>
            <FormMessage />
        </div>
    );
};
