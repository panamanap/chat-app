import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { DialogsItem } from './DialogsItem';

export const Dialogs = () => {
    const dialogs = useTypedSelector(state => state.sidebar)
    return (
        <div>
            {dialogs.map((user) => (
                <DialogsItem
                    key={user.id}
                    avatar={user.avatar}
                    name={user.name}
                    title={user.title}
                />
            ))}
        </div>
    );
};
