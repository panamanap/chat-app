import React from 'react';
import { ImageButtonType } from '../../types/UI';
import { AdditionalMenu } from '../AdditionalMenu';
import { ImageButton } from '../UI/ImageButton/ImageButton';
import './Header.scss';

interface HeadersProps {
    title: string | React.ReactNode;
    buttons: ImageButtonType[];
    type: string;
    children?: React.ReactNode;
}

export const Header: React.FC<HeadersProps> = ({title, buttons, type, children}) => {
    return (
        <header className={`header header-${type}`}>
            {title}
            <div className="navPanel">
                {buttons.map(({alt, path, onClick, size}) => (
                    <ImageButton
                        key={alt}
                        path={path}
                        alt={alt}
                        onClick={onClick}
                        size={size}
                    />
                ))}
                {children}
            </div>
        </header>
    );
};
