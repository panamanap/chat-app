import React from 'react';
import { ImageButton } from '../UI/ImageButton/ImageButton';
import { Input } from '../UI/Input/Input';
import { Label } from '../UI/Label';
import './FormMessage.scss';

export const FormMessage = () => {
    const onChange = () => {};
    const onClick = () => {
        console.log('aaa');
    };

    return (
        <div className="formMessage">
            <Label onChange={onChange} path="/assets/clip.svg" alt="clip" size={25}/>
            <form action="" className="formMessage__form">
                <Input
                    type="text"
                    placeholder="Write a message..."
                    onChange={onChange}
                />
                <div className="formMessage__form-sending">
                    <ImageButton
                        path="/assets/smile.svg"
                        alt="smile"
                        size={30}
                        onClick={onClick}
                    />
                    <ImageButton
                        path="/assets/plane.svg"
                        alt="send"
                        size={35}
                        onClick={onClick}
                    />
                </div>
            </form>
        </div>
    );
};
