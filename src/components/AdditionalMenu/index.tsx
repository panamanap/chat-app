import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './AdditionMenu.scss';

interface AdditionalMenuProps {
    condition: boolean;
    type?: string
    children: React.ReactNode;
}

export const AdditionalMenu: React.FC<AdditionalMenuProps> = ({
    condition,
    type,
    children,
}) => {
    return (
        <CSSTransition
            in={condition}
            timeout={500}
            unmountOnExit
            classNames="transitionMenu"
        >
            <div className={`menu menu-${type}`} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </CSSTransition>
    );
};
