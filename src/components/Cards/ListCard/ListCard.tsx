import React from "react";
import IUser from "../../../interfaces/user";
import mailIcon from '../../../assets/icons/mail.svg';
import phoneIcon from '../../../assets/icons/phone.svg';
import './ListCard.scss';

interface Props {
    user: IUser
}

export const ListCard: React.FC<Props> = ({user}) => {

    return (
        <div className='list-card-container'>
            <div style={{background: user.color}} className='colored-part'>
                <div style={{boxShadow: `0 -20px 0 0 ${user.color}`}} className="shape">
                    <div style={{boxShadow: `0 -24px 0 0 ${user.color}`}} className="inner"></div>
                </div>
            </div>
            <img aria-label="user photo" className='user-photo' src={user.picture.medium} alt=""/>
            <div className='name-location-box'>
                <span aria-label="user name and family">{user.name.first} {user.name.last}</span>
                <span aria-label="user location">{user.location.city}</span>
            </div>
            <div className='contact'>
                <img aria-label="user email" src={mailIcon} alt=""/>
                <img aria-label="user phone number" src={phoneIcon} alt=""/>
            </div>
        </div>
    );
};