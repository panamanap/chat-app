import React from 'react';
import { IProfileInfo } from '../../types/profile';
import { SIDEBAR_SIZE, USER_DATA } from '../../utils/constants';
import './ProfileInfo.scss';

interface ProfileInfoProps extends Omit<IProfileInfo, 'id'> {
    type: string;
    onClick?: () => void;
}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({
    avatar,
    name,
    title,
    type,
    onClick,
}) => {
    return (
        <div className={`profileInfo profileInfo-${type}`} onClick={onClick}>
            {avatar ? (
                <img src="/" alt={avatar} />
            ) : (
                <img src="/assets/user.svg" className='img' alt='user'/>
            )}
            <div className="description">
                <h3>{name}</h3>
               <p className='titleText'>{title}</p>
            </div>
        </div>
    );
};
