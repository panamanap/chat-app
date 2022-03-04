import React from 'react';
import { Routes, Route } from 'react-router';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { Login } from '../components/Login';
import { Home } from '../pages/Home';
import { selectIsAuth } from '../store/selectors/login';
import { IS_AUTH } from '../utils/constants';
import { privateRoutes, publicRoutes } from './routes';


export const AppRouter = () => {
    const isAuth = useTypedSelector(selectIsAuth);

    return (
        <>
            {isAuth || localStorage.getItem(IS_AUTH) ? (
                <Routes>
                    {publicRoutes.map(({ path, component }) => (
                        <Route key={path} path={path} element={component} />
                    ))}
                    <Route path="*" element={<Home />} />
                </Routes>
            ) : (
                <Routes>
                    {privateRoutes.map(({ path, component }) => (
                        <Route key={path} path={path} element={component} />
                    ))}
                    <Route path="*" element={<Login />} />
                </Routes>
            )}
        </>
    );
};
