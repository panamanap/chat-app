import React from 'react';
import { IMenuItem } from '../../types/UI';
import { MenuItem } from '../UI/MenuItem';
import './MenuList.scss';

interface MenuListProps {
    menu: IMenuItem[];
    type?: string;
}

export const MenuList: React.FC<MenuListProps> = ({ menu, type }) => {
    return (
        <nav className={`navMenu navMenu-${type}`}>
            {menu.map(({ title, path, alt, onClick }) => (
                <MenuItem
                    key={path}
                    title={title}
                    path={path}
                    alt={alt}
                    onClick={onClick}
                />
            ))}
        </nav>
    );
};
