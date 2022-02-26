import React from 'react';
import { ImageButtonType } from '../../types/UI';
import { ImageButton } from '../UI/ImageButton/ImageButton';
import './Navbar.scss';

interface NavbarProps {
    buttons: ImageButtonType[];
    children?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({ buttons, children }) => {
    return (
        <nav className="navbar">
            {buttons.map(({ alt, path, onClick, size }) => (
                <ImageButton
                    key={alt}
                    path={path}
                    alt={alt}
                    onClick={onClick}
                    size={size}
                />
            ))}
            {children}
        </nav>
    );
};
