import React from 'react';
import { useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { openDrawer } from '../../store/actions/drawer';
import './Drawer.scss';

interface DrawerProps {
    condition: boolean;
}

const imageSize = 35;

export const Drawer: React.FC<DrawerProps> = ({ condition }) => {
    const dispatch = useDispatch();

    const onCloseDrawer = () => {
        dispatch(openDrawer(false));
    };

    return (
        <CSSTransition
            in={condition}
            timeout={1000}
            unmountOnExit
            classNames="transitionDrawer"
        >
            <div className="drawer-wrapper" onClick={onCloseDrawer}>
                <div
                    className="drawer"
                    onClick={(event) => event.stopPropagation()}
                >
                    <div className="profile"></div>
                    <div>Select a chat to start messaging</div>
                </div>
            </div>
        </CSSTransition>
    );
};
