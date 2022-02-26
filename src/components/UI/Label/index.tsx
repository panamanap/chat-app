import React from 'react';
import { Input } from '../Input/Input';
import './Label.scss';

interface LabelProps {
    onChange: () => void;
    path: string;
    alt: string;
    size: number
}

export const Label: React.FC<LabelProps> = ({ onChange, path, alt, size }) => {
    return (
        <button className="label-button" style={{
            width: `${size}px`,
            height: `${size}px`
        }}>
            <label className="label">
                <img src={path} alt={alt} width={size} height={size}/>
                <Input type="file" onChange={onChange} />
            </label>
        </button>
    );
};
