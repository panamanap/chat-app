import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { openContacts } from '../../store/actions/drawer';
import { selectOpenContacts } from '../../store/selectors/drawer';
import { Header } from '../Header';
import { ModalWindow } from '../ModalWindow';
import './ContactsModal.scss';

export const ContactsModal = () => {
    const showCalls = useTypedSelector(selectOpenContacts);
    
    const dispatch = useDispatch();

    const onCloseCalls = () => {
        dispatch(openContacts(false))
    }

    const onCloseMenu = () => {
        
    }

    return (
        <ModalWindow condition={showCalls} onCloseModal={onCloseCalls} onCloseMenu={onCloseMenu}>
            <><Header title="Contacts" type='modal'/></>
        </ModalWindow>
    );
};
