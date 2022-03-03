import { Login } from './../Login/index';
import { Home } from './../pages/Home';
import { LOGIN_ROUTE, CHAT_ROUTE } from '../utils/constants';

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: Login,
    } 
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        component: Home
    }
]