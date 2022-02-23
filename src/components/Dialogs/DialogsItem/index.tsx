import React from 'react'
import { IDialogsItem } from '../../../types/sidebar'
import './DialogsItem.scss'

export const DialogsItem: React.FC<IDialogsItem> = ({avatar, name, title}) => {
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
