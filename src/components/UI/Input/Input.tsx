import React from 'react';
import './Input.scss'

interface InputProps {
    children: string;
}

export const Input: React.FC<InputProps> = ({ children }) => {
    return <input placeholder={children}></input>;
};
