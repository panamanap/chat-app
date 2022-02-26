import React from 'react';
import { useDispatch } from 'react-redux';
import { getColor } from '../../store/actions/dialog';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input/Input';
import './ColorMenu.scss';

interface ColorMenuProps {
    onGetColor: (value: string) => void;
    backgroundColor: string | null;
    dialogBackground: string;
    onResetColor: () => void;
}

const colors = [
    '#FED6BC',
    '#FFFADD',
    '#DEF7FE',
    '#99CCCC',
    '#C3FBD8',
    '#FFCC99',
    '#CCFF99',
    '#B5F2EA',
    '#6699CC',
];

export const ColorMenu: React.FC<ColorMenuProps> = ({
    onGetColor,
    backgroundColor,
    dialogBackground,
    onResetColor,
}) => {
    const dispatch = useDispatch();

    const onSelectionColor = (color: string) => {
        dispatch(getColor(color))
    };

    return (
        <div className="colorWrapper">
            <h4>Selected color: </h4>
            <Input
                onChange={onGetColor}
                type="color"
                defaultColor={backgroundColor || dialogBackground}
            />
            <div className="suggested-colors">
                {colors.map((color) => (
                    <span
                        key={color}
                        style={{ backgroundColor: color }}
                        onClick={() => onSelectionColor(color)}
                    ></span>
                ))}
            </div>
            <Button onClick={onResetColor}>Reset</Button>
        </div>
    );
};
