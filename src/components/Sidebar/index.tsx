import React from 'react';
import { useDispatch } from 'react-redux';
import { Resizable, ResizeCallback } from 're-resizable';
import { searchDialog } from '../../store/actions/sidebar';
import { DialogsList } from '../DialogsList';
import { Navbar } from '../Navbar';
import { Input } from '../UI/Input/Input';
import './Sidebar.scss';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const [width, setWidth] = React.useState(
        localStorage.getItem('sizeSidebar') || 400
    );

    const onSearchDialog = (text: string) => {
        dispatch(searchDialog(text));
    };

    const onResizeStop: ResizeCallback = (event, direction, ref, params) => {
        localStorage.setItem('sizeSidebar', `${+width + params.width}`);
    };

    return (
        <Resizable
            className="sidebar"
            defaultSize={{
                width: width,
                height: '100%',
            }}
            enable={{
                right: true,
            }}
            maxWidth="50%"
            minWidth={250}
            onResizeStop={onResizeStop}
        >
            <header className="search">
                <Input onChange={onSearchDialog} placeholder="Search" />
            </header>
            <DialogsList />
            <Navbar />
        </Resizable>
    );
};
