import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './ModalWindow.scss';

interface ModalWindowProps {
    condition: boolean;
    onCloseModal: () => void;
    onCloseMenu: () => void;
    children: React.ReactNode;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({
    condition,
    onCloseModal,
    onCloseMenu,
    children,
}) => {
    const closeMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        if ((event.target as HTMLImageElement).className === 'image more') {
            return;
        }
        onCloseMenu()
    } 
    
    return (
        <CSSTransition
            in={condition}
            timeout={1000}
            unmountOnExit
            classNames="transition"
        >
            <div className="backgroundWrapper" onClick={onCloseModal}>
                <div
                    className="wrapper"
                    onClick={(event) => {
                        event.stopPropagation();
                        closeMenu(event);
                    }}
                >
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
};
