import React from 'react';
import './Input.scss';

interface InputProps {
    placeholder: string;
    onChange: (text: string) => void;
}

export const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
    const [value, setValue] = React.useState<string>('');

    React.useEffect(() => {
        onChange(value);
    }, [value]);

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return <input onChange={onChangeValue} placeholder={placeholder}></input>;
};
