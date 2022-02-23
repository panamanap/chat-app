import React from 'react';
import { useDispatch } from 'react-redux';
import { searchDialog } from '../../store/actions/sidebar';
import { Dialogs } from '../Dialogs';
import { Input } from '../UI/Input/Input';
import './Sidebar.scss';

export const Sidebar = () => {
    const dispatch = useDispatch();

    const onSearchDialog = (text: string) => {
        dispatch(searchDialog(text))
    }

    return (
        <div className="sidebar">
            <div className='search'>
                <Input onChange={onSearchDialog} placeholder='Search'/>
            </div>
            <Dialogs />
        </div>
    );
};
