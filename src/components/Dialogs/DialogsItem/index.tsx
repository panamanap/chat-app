import React from 'react'
import './DialogsItem.scss'

interface DialogsItemProps {
    avatar: string;
    name: string;
    title: string;
}

export const DialogsItem: React.FC<DialogsItemProps> = ({avatar, name, title}) => {
  return (
    <div className='user'>
        {/* <img src="/" alt={avatar} /> */}
        <div className='img'></div>
        <div className='description'>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    </div>
  )
}
