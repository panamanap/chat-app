import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectOpenAditionalMenu } from '../../store/selectors/dialogs';
import './AdditionMenu.scss';

export const AdditionalMenu = () => {
    const openMenu = useTypedSelector(selectOpenAditionalMenu);

    return (
        <CSSTransition
            in={openMenu}
            timeout={500}
            unmountOnExit
            classNames="menuWrapper"
        >
            <ul className="menu" onClick={(event) => event.stopPropagation()}>
                <li>Viev profile</li>
                <li>Change colors</li>
                <li>Clear history</li>
                <li>Delete chat </li>
            </ul>
        </CSSTransition>
    );
};
