import React from 'react';
import { Routes, Route } from 'react-router';
import { Login } from '../Login';
import { Home } from '../pages/Home';
import { privateRoutes, publicRoutes } from './routes';

export const AppRouter = () => {
    const user = false;

    return (
        <>
            {user ? (
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
                    <Route path="*" element={<Login/>} />
                </Routes>
            )}
        </>
    );
};
