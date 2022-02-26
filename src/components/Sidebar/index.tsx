import React from 'react';
import { useDispatch } from 'react-redux';
import { Resizable, ResizeCallback } from 're-resizable';
import { searchDialog } from '../../store/actions/sidebar';
import { DialogsList } from '../DialogsList';
import { Navbar } from '../Navbar';
import { Input } from '../UI/Input/Input';
import './Sidebar.scss';
import { SIDEBAR_SIZE } from '../../utils/constants';

export const Sidebar = () => {
    const dispatch = useDispatch();
    const [width, setWidth] = React.useState(
        localStorage.getItem(SIDEBAR_SIZE) || 400
    );

    const onSearchDialog = (text: string) => {
        dispatch(searchDialog(text));
    };

    const onResizeStop: ResizeCallback = (event, direction, ref, params) => {
        localStorage.setItem(SIDEBAR_SIZE, `${+width + params.width}`);
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
                <Input
                    type="text"
                    onChange={onSearchDialog}
                    placeholder="Search"
                />
            </header>
            <DialogsList />
            <Navbar />
        </Resizable>
    );
};
