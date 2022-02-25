import React from 'react'
import { IDialogsItem } from '../../../types/sidebar'
import './DialogsItem.scss'

type DealogsItemProps = Omit<IDialogsItem, 'id'>

export const DialogsItem: React.FC<DealogsItemProps> = ({avatar, name, title}) => {
  return (
    <div className='dialog'>
        {/* <img src="/" alt={avatar} /> */}
        <div className='img'></div>
        <div className='description'>
            <h3>{name}</h3>
            <p>{title}</p>
        </div>
    </div>
  )
}
