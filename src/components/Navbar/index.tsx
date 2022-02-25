import React from 'react';
import { ImageButton } from '../UI/ImageButton/ImageButton';

const imageSize = 35;

export const Navbar = () => {
    const onClickButton = () => {
        console.log('aaa');
    };

    return (
        <footer className="navbar">
            <ImageButton
                path="/assets/user.svg"
                alt="user"
                onClick={onClickButton}
                size={imageSize}
            />
            <ImageButton
                path="/assets/call.svg"
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
                path="/assets/settings.svg"
                alt="settings"
                onClick={onClickButton}
                size={imageSize}
            />
        </footer>
    );
};
