import React from 'react';
import { DialogsItem } from './DialogsItem';

const arr = [
    { id: 1, avatar: 'avatar', name: 'Иванов Иван', title: 'Привет' },
    { id: 2, avatar: 'avatar', name: 'Петров Петя', title: 'Привет' },
    { id: 3, avatar: 'avatar', name: 'Андреев Андрей', title: 'Привет' },
];

export const Dialogs = () => {
    return (
        <div>
            {arr.map((user) => (
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
