import React from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { selectFilterDialogs } from '../../store/selectors/sidebar';
import { DialogsItem } from './DialogsItem';

export const DialogsList = () => {
    const dialogsList = useTypedSelector(selectFilterDialogs);
    
    return (
        <div className="dialogsList">
            {dialogsList.map((user) => (
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
