import React from 'react';
import './Button.scss';

interface ButtonProps {
    children: string;
    onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button className="customButton" onClick={onClick}>
            {children}
        </button>
    );
};
