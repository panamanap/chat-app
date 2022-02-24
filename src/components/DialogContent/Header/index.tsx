import React from 'react';
import { ImageButton } from '../../UI/ImageButton/ImageButton';
import './Header.scss';

const imageSize = 25;

export const Header = () => {
    const onClickButton = () => {
        console.log('vvvvv');
    };
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__left-avatar"></div>
                <div className="header__left-personData">
                    <h2 className="header__left-personData-name">
                        Полюхович Назар
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
                    onClick={onClickButton}
                    size={imageSize}
                />
            </div>
        </div>
    );
};
