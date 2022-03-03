import React from 'react';
import './MenuItem.scss';

interface MenuItemProps {
    path: string;
    alt: string;
    title: string;
    onClick?: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
    path,
    alt,
    title,
    onClick,
}) => {
    return (
        <p className={`menu-item ${alt}`} onClick={onClick}>
            <img src={path} alt={alt} className={`menu-item-${alt}`} />
            {title}
        </p>
    );
};
