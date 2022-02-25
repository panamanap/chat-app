import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './AdditionMenu.scss';

interface AdditionalMenuProps {
    top: number;
    right: number;
    condition: boolean;
    onClick: () => void;
}

export const AdditionalMenu: React.FC<AdditionalMenuProps> = ({
    top,
    right,
    condition,
    onClick,
}) => {
    return (
        <CSSTransition
            in={condition}
            timeout={500}
            unmountOnExit
            classNames="transitionMenu"
        >
            <ul
                className="menu"
                onClick={(event) => event.stopPropagation()}
                style={{ top: `${top}px`, right: `${right}px` }}
            >
                <li onClick={onClick}>Viev profile</li>
                <li>Change colors</li>
                <li>Clear history</li>
                <li>Delete chat </li>
            </ul>
        </CSSTransition>
    );
};
