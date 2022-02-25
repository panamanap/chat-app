import React from 'react';
import { useDispatch } from 'react-redux';
import { Transition } from 'react-transition-group';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { openAdditionalMenu } from '../../../store/actions/dialog';
import { selectOpenAditionalMenu } from '../../../store/selectors/dialogs';
import { AdditionalMenu } from '../../AdditionalMenu';
import { ImageButton } from '../../UI/ImageButton/ImageButton';
import './Header.scss';

const imageSize = 25;

export const Header = () => {
    const dispatch = useDispatch();
    const openMenu = useTypedSelector(selectOpenAditionalMenu);

    const onClickButton = () => {
        console.log('vvvvv');
    };

    const onOpenAdditionalMenu = () => {
        if(openMenu) {
            dispatch(openAdditionalMenu(false))
            return 
        }
       dispatch(openAdditionalMenu(true))
    };

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__left-avatar"></div>
                <div className="header__left-personData">
                    <h2 className="header__left-personData-name">
                        Иванов Иван
                    </h2>
                    <p className="header__left-personData-status">
                        last seen recently
                    </p>
                </div>
            </div>
            <div className="header__right">
                <ImageButton
                    path="assets/call.svg"
                    alt="call"
                    onClick={onClickButton}
                    size={imageSize}
                />

                <ImageButton
                    path="assets/search.svg"
                    alt="search"
                    onClick={onClickButton}
                    size={imageSize}
                />
                <ImageButton
                    path="assets/more.svg"
                    alt="more"
                    onClick={() => onOpenAdditionalMenu()}
                    size={imageSize}
                />
                <AdditionalMenu />
            </div>
        </div>
    );
};
