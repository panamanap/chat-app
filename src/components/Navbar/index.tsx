import React from 'react';
import { ImageButton } from '../UI/ImageButton/ImageButton';

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
            />
            <ImageButton
                path="/assets/user.svg"
                alt="calls"
                onClick={onClickButton}
            />
            <ImageButton
                path="/assets/dialogs.svg"
                alt="dialogs"
                onClick={onClickButton}
            />
            <ImageButton
                path="/assets/user.svg"
                alt="user"
                onClick={onClickButton}
            />
        </footer>
    );
};
