import React from 'react';
import { ImageButton } from '../UI/ImageButton/ImageButton';

const imageSize = 40;

export const Navbar = () => {
    const onClickButton = () => {
        console.log('aaa');
    };

    return (
        <footer className="navbar">
            <ImageButton
                path="/assets/user.svg"
                alt="menu"
                onClick={onClickButton}
                size={imageSize}
            />
            <ImageButton
                path="/assets/user.svg"
                alt="calls"
                onClick={onClickButton}
                size={imageSize}
            />
            <ImageButton
                path="/assets/dialogs.svg"
                alt="dialogs"
                onClick={onClickButton}
                size={imageSize}
            />
            <ImageButton
                path="/assets/user.svg"
                alt="user"
                onClick={onClickButton}
                size={imageSize}
            />
        </footer>
    );
};
