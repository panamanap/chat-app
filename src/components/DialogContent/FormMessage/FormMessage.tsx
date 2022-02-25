import React from 'react';
import { ImageButton } from '../../UI/ImageButton/ImageButton';
import { Input } from '../../UI/Input/Input';
import './FormMessage.scss';

export const FormMessage = () => {
    const onChange = () => {};
    const onClick = () => {};

    return (
        <div className="formMessage">
            <form action="" className="formMessage__form">
                <div className="formMessage__form-div">
                    <ImageButton
                        path="/assets/clip.svg"
                        alt="clip"
                        size={30}
                        onClick={onClick}
                    />
                    <Input
                        placeholder="Write a message..."
                        onChange={onChange}
                    />
                </div>
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
