import React from 'react';
import './ImageButton.scss'

interface ImageButtonProps {
    path: string;
    alt: string;
    onClick: () => void;
}

export const ImageButton: React.FC<ImageButtonProps> = ({
    path,
    alt,
    onClick,
}) => {
    return <img src={path} alt={alt} onClick={onClick} />;
};
