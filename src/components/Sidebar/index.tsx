import React from 'react';
import { useDispatch } from 'react-redux';
import { Resizable, ResizeCallback } from 're-resizable';
import { searchDialog } from '../../store/actions/sidebar';
import { DialogsList } from '../DialogsList';
import { Navbar } from '../Navbar';
import { Input } from '../UI/Input/Input';
import './Sidebar.scss';
import { SIDEBAR_SIZE } from '../../utils/constants';
import { openDrawer } from '../../store/actions/drawer';
import { Header } from '../Header';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Drawer } from '../Drawer';
import { ImageButton } from '../UI/ImageButton/ImageButton';
import { selectOpenDrawer } from '../../store/selectors/drawer';

export const Sidebar = () => {
    const dispatch = useDispatch();

    const showDrawer = useTypedSelector(selectOpenDrawer);

    const [width, setWidth] = React.useState(
        localStorage.getItem(SIDEBAR_SIZE) || 400
    );

    const onSearchDialog = (text: string) => {
        dispatch(searchDialog(text));
    };

    const onResizeStop: ResizeCallback = (event, direction, ref, params) => {
        localStorage.setItem(SIDEBAR_SIZE, `${+width + params.width}`);
    };

    const onOpenDrawer = () => {
        console.log('aaaa');
        dispatch(openDrawer(true));
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
            <Drawer condition={showDrawer} />
            <Header
                title={
                    <>
                        <ImageButton
                            path="/assets/burger.svg"
                            alt="burger"
                            size={25}
                            onClick={onOpenDrawer}
                        />
                        <Input
                            type="text"
                            onChange={onSearchDialog}
                            placeholder="Search"
                        />
                    </>
                }
                type="sidebar"
            />
            <DialogsList />
        </Resizable>
    );
};
