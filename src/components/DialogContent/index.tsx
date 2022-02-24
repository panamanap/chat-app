import React from 'react';
import { Header } from './Header';
import './DialogContent.scss'
import { FormMessage } from './FormMessage/FormMessage';

export const DialogContent = () => {
    return (
        <div className='content'>
            <Header />
            <FormMessage/>
        </div>
    );
};

