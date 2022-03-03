import React from 'react';
import { ImageButtonType } from '../../types/UI';
import { Navbar } from '../Navbar';
import './Header.scss';

interface HeadersProps {
    title: string | React.ReactNode;
    buttons?: ImageButtonType[];
    type: string;
    children?: React.ReactNode;
    style?: Style;
}

interface Style {
    backgroundColor: string;
}

export const Header: React.FC<HeadersProps> = ({
    title,
    type,
    buttons,
    children,
    style,
}) => {
    return (
        <header className={`header header-${type}`} style={style}>
            {title}
            {buttons && <Navbar buttons={buttons}>{children}</Navbar>}
        </header>
    );
};
