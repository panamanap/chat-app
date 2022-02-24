import { Resizable } from 're-resizable';
import React, { ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { searchDialog } from '../../store/actions/sidebar';
import { Dialogs } from '../Dialogs';
import { Navbar } from '../Navbar';
import { Input } from '../UI/Input/Input';
import './Sidebar.scss';

export const Sidebar = () => {
    const dispatch = useDispatch();

    const onSearchDialog = (text: string) => {
        dispatch(searchDialog(text));
    };

    return (
        <Resizable
            className="sidebar"
            defaultSize={{
                width: 400,
                height: '100%',
            }}
            enable={{
                right: true
            }}
            maxWidth='50%'
            minWidth={250}
        >
            <header className="search">
                <Input onChange={onSearchDialog} placeholder="Search" />
            </header>
            <Dialogs />
            <Navbar />
        </Resizable>
    );
};
