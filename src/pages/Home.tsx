import React from 'react';
import { DialogContent } from '../components/DialogContent';
import { Sidebar } from '../components/Sidebar';

export const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <DialogContent/>
        </div>
    );
};
