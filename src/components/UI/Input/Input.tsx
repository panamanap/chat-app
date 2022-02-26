import React from 'react';
import './Input.scss';

interface InputProps {
    placeholder?: string;
    onChange: (value: string) => void;
    type: string;
    defaultColor?: string;
    name?: string;
}

export const Input: React.FC<InputProps> = ({
    placeholder,
    onChange,
    type,
    defaultColor,
    name,
}) => {
    const [value, setValue] = React.useState<string>('');

    React.useEffect(() => {
        onChange(value);
    }, [value]);

    const onChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    return (
        <input
            defaultValue={defaultColor}
            className={type}
            type={type}
            onChange={onChangeValue}
            placeholder={placeholder}
            name={name}
        ></input>
    );
};
