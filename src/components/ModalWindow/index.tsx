import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './ModalWindow.scss';

interface ModalWindowProps {
    condition: boolean;
    children: React.ReactChild;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({
    condition,
    children,
}) => {
    return (
        <CSSTransition
            in={condition}
            timeout={500}
            unmountOnExit
            classNames="transition"
        >
            {children}
        </CSSTransition>
    );
};
