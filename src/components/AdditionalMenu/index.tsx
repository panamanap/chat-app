import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './AdditionMenu.scss';

interface AdditionalMenuProps {
    top: number;
    right: number;
    condition: boolean;
    children: React.ReactNode;
}

export const AdditionalMenu: React.FC<AdditionalMenuProps> = ({
    top,
    right,
    condition,
    children,
}) => {
    return (
        <CSSTransition
            in={condition}
            timeout={500}
            unmountOnExit
            classNames="transitionMenu"
        >
            <div
                className="menu"
                onClick={(event) => event.stopPropagation()}
                style={{ top: `${top}px`, right: `${right}px` }}
            >
                {children}
            </div>
        </CSSTransition>
    );
};
