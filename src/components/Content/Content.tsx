import React from 'react';
import { Navbar } from './Navbar/Navbar';
import './Content.scss'
import { FormMessage } from './FormMessage/FormMessage';

const Content = () => {
    return (
        <div className='content'>
            <Navbar />
            <FormMessage/>
        </div>
    );
};

export default Content;