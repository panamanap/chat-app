import React from 'react';
import { ImageButtonType } from '../../../types/UI';
import './ImageButton.scss';

export const ImageButton: React.FC<ImageButtonType> = ({
    path,
    alt,
    size,
    onClick,
}) => {
    return (
        <button
            className={`imageButton imageButton-${alt}`}
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            <img
                className={`image ${alt}`}
                width={size}
                height={size}
                src={path}
                alt={alt}
                onClick={onClick}
            />
        </button>
    );
};
