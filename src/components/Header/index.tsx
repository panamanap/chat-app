import React from 'react';
import { ImageButtonType } from '../../types/UI';
import { AdditionalMenu } from '../AdditionalMenu';
import { Navbar } from '../Navbar';
import { ImageButton } from '../UI/ImageButton/ImageButton';
import './Header.scss';

interface HeadersProps {
    title: string | React.ReactNode;
    buttons?: ImageButtonType[];
    type: string;
    children?: React.ReactNode;
}

export const Header: React.FC<HeadersProps> = ({
    title,
    buttons,
    type,
    children,
}) => {
    return (
        <header className={`header header-${type}`}>
            {title}
            {buttons && <Navbar buttons={buttons}>{children}</Navbar>}
        </header>
    );
};
