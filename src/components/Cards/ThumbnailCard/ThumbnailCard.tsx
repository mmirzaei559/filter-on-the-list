import React from "react";
import IUser from "../../../interfaces/user";
import mailIcon from '../../../assets/icons/mail.svg';
import phoneIcon from '../../../assets/icons/phone.svg';
import './ThumbnailCard.scss'

interface Props {
    user: IUser
}
export const ThumbnailCard: React.FC<Props> = ({user}) => {

        return (
        <div className="thumbnail-card-container">
            <div style={{background: user.color}} className="colored-part">
                <div style={{boxShadow: `0 -20px 0 0 ${user.color}`}} className="shape">
                    <div style={{boxShadow: `0 -24px 0 0 ${user.color}`}} className="inner"></div>
                </div>
            </div>
            <h2 aria-label="user name and family">{user.name.first} {user.name.last}</h2>
            <img aria-label="user photo" className='user-photo' src={user.picture.medium} alt=""/>
            <div className='contact'>
                <h4 aria-label="user location">{user.location.city}</h4>
                <div className='icons'>
                    <img aria-label="user email" src={mailIcon} alt=""/>
                    <img aria-label="user phone number" src={phoneIcon} alt=""/>
                </div>
            </div>
        </div>
);
};