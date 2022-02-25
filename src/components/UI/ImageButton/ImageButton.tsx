import React from 'react';
import './ImageButton.scss';

interface ImageButtonProps {
    path: string;
    alt: string;
    size: number;
    onClick: () => void;
}

export const ImageButton: React.FC<ImageButtonProps> = ({
    path,
    alt,
    size,
    onClick,
}) => {
    return (
        <button
            className={alt}
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            <img
                className={alt}
                width={size}
                height={size}
                src={path}
                alt={alt}
                onClick={onClick}
            />
        </button>
    );
};
