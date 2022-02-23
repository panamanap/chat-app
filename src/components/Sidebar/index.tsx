import React from 'react';
import { useDispatch } from 'react-redux';
import { searchDialog } from '../../store/actions/sidebar';
import { Dialogs } from '../Dialogs';
import { Navbar } from '../Navbar';
import { Input } from '../UI/Input/Input';
import './Sidebar.scss';

export const Sidebar = () => {
    const dispatch = useDispatch();

    const onSearchDialog = (text: string) => {
        dispatch(searchDialog(text))
    }

    return (
        <div className="sidebar">
            <header className='search'>
                <Input onChange={onSearchDialog} placeholder='Search'/>
            </header>
            <Dialogs />
            <Navbar />
        </div>
    );
};
