import React from 'react';
import { Header } from './Header';
import './DialogContent.scss';
import { FormMessage } from './FormMessage/FormMessage';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectOpenAditionalMenu } from '../../store/selectors/dialogs';
import { useDispatch } from 'react-redux';
import { openAdditionalMenu } from '../../store/actions/dialog';

export const DialogContent = () => {
    const dispatch = useDispatch();
    const openMenu = useTypedSelector(selectOpenAditionalMenu);

    const onCloseMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLImageElement).className === 'more') {
            return;
        }
        openMenu && dispatch(openAdditionalMenu(false));
    };

    return (
        <div className="content" onClick={onCloseMenu}>
            <Header />
            <FormMessage />
        </div>
    );
};
