import React from 'react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input/Input';
import { Logo } from '../Logo';
import { auth } from '../../utils/firebase-config';
import { useDispatch } from 'react-redux';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import './Login.scss';
import { UserData } from '../../types/login';
import { createUser, openRegistration } from '../../store/actions/login';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectOpenRegistration } from '../../store/selectors/login';

export const Login = () => {
    const [user, setUser] = React.useState<UserData>({
        email: '',
        password: '',
    });

    const showRegistration = useTypedSelector(selectOpenRegistration);

    const dispatch = useDispatch();

    const login = ({ email, password }: UserData) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    createUser({
                        id: user.uid,
                        email: user.email,
                        isAuth: true,
                    })
                );
            })
            .catch((error) => console.log(error));
    };

    const register = ({ email, password }: UserData) => {
        if (!!user.email === false) {
            alert('введите email');
            return;
        }
        if (!!user.password === false) {
            alert('введите password');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(
                    createUser({
                        id: user.uid,
                        email: user.email,
                        isAuth: true,
                        isNewAccount: true,
                    })
                );
            })
            .catch((error) => {
                dispatch(openRegistration(true));
                alert('This account exists!');
            });
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

    const onOpenRegistration = () => {
        dispatch(openRegistration(false));
    };

    const onOpenLogin = () => {
        dispatch(openRegistration(true));
    };

    return (
        <div className="loginWrapper">
            <div className="login">
                <Logo />
                <div className="authentication">
                    {!showRegistration && <h2>Registration</h2>}
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
                    {!showRegistration ? (
                        <>
                            <Button onClick={() => register(user)}>
                                Sign Up
                            </Button>
                            <p className="signIn" onClick={onOpenLogin}>
                                already have an account?
                            </p>
                        </>
                    ) : (
                        <Button onClick={() => login(user)}>Sign In</Button>
                    )}
                </div>
                {showRegistration && (
                    <div className="registration">
                        <Button onClick={onOpenRegistration}>
                            Create new account
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};
