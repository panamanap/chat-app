import React from 'react';
import { Content } from '../components/Content';
import { Sidebar } from '../components/Sidebar';

export const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <Content/>
        </div>
    );
};
