import React from 'react';
import { Dialogs } from '../Dialogs';
import { Input } from '../UI/Input/Input';
import './Sidebar.scss';

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='search'>
                <Input>Search</Input>
            </div>
            <Dialogs />
        </div>
    );
};
