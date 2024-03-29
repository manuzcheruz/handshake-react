import React from 'react';

import { Menu, CheckSlim, Message, School } from '../../../Assets/icons';
import './StudentCard.css';

export interface PropsStudentCard {
    name: string;
    img: any;
    role: string;
    friends: number;
    posts: number;
    center: string;
}

/**
 * properties recieved by the student card to customize it
 * @param param0 
 * @returns 
 */
function StudentCard({name, img, role, friends, posts, center} : PropsStudentCard): JSX.Element {
    return (
        <div className="jobholder-profile">
            <div className="profile-wrapper">
                <div className="profile-top">
                    <div className="profile-menu">
                        <div className="icon-menu">
                            <Menu height={20} color='grey'></Menu>
                        </div>
                    </div>
                    <div className="profile-info">
                        <div className="profile-image">
                            {img}
                        </div>
                        <div className="name">
                            {name}
                        </div>
                        <div className="role">
                            {role}
                        </div>
                        <div className="location">
                            <span className="icon-marker">
                                <School height={10} color="grey" />
                            </span>
                            {center}
                        </div>
                    </div>
                </div>
                <div className="profile-middle">
                    <div className="profile-posts">
                        <span>{posts}</span>
                            Posts
                    </div>
                    <div className="profile-posts">
                        <span>{friends}</span>
                            Friends
                    </div>
                </div>
                <div className="profile-bottom">
                    <div className="button-friends">
                        <button className="friends">
                            <span><CheckSlim height={15} color="white" /></span>
                                Invite
                        </button>
                    </div>
                    <div className="button-friends">
                        <button className="message-friends">
                            <span><Message height={15} color="black" /></span>
                                Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentCard;
