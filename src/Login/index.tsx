import React from 'react';
import { Button } from '../components/UI/Button';
import { Input } from '../components/UI/Input/Input';
import './Login.scss';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase-config';
import { useDispatch } from 'react-redux';
import { createUser } from '../store/actions/login';
import { UserState } from '../types/login';

export const Login = () => {
    const [user, setUser] = React.useState<UserState>({
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const onCreateUser = () => {
        if (!!user.email === false) {
            alert('введите email');
            return;
        }
        if (!!user.password === false) {
            alert('введите password');
            return;
        }
        dispatch(createUser(user));
    };

    const onSaveUserLogin = (text: string) => {
        setUser({
            ...user,
            email: text,
        });
    };

    const onSaveUserPassword = (text: string) => {
        setUser({
            ...user,
            password: text,
        });
    };

    const register = async () => {
        
    };

    return (
        <div className="loginWrapper">
            <div className="login">
                <div className="logo">
                    <img src="/assets/chat.svg" alt="background login" />
                    <h1>React chat</h1>
                </div>
                <div className="authentication">
                    <h2>Registration</h2>
                    <div className="inputWrapper">
                        <Input
                            type="text"
                            placeholder="Login"
                            onChange={onSaveUserLogin}
                        />
                        <Input
                            type="text"
                            placeholder="Password"
                            onChange={onSaveUserPassword}
                        />
                    </div>
                    <Button onClick={onCreateUser}>Sign In</Button>
                </div>
            </div>
        </div>
    );
};
