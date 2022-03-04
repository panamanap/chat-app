import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { openCalls, openDrawer } from '../../store/actions/drawer';
import { selectOpenCalls } from '../../store/selectors/drawer';
import { Header } from '../Header';
import { ModalWindow } from '../ModalWindow';
import './CallsModal.scss';

export const CallsModal = () => {
    const showCalls = useTypedSelector(selectOpenCalls);
    
    const dispatch = useDispatch();

    const onCloseCalls = () => {
        dispatch(openCalls(false))
    }

    const onCloseMenu = () => {
        
    }

    return (
        <ModalWindow condition={showCalls} onCloseModal={onCloseCalls}onCloseMenu={onCloseMenu}>
            <><Header title="Calls" type='modal'/></>
        </ModalWindow>
    );
};
