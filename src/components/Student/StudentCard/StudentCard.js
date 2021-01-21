import React from 'react'

import { Menu, Marker, CheckSlim, Message } from '../../../Assets/icons'
import './StudentCard.css'

function StudentCard(props) {
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
                        </div>
                        <div className="name">
                            Junaki
                        </div>
                        <div className="role">
                            Product Manager
                        </div>
                        <div className="location">
                            <span className="icon-marker">
                                <Marker height={10} color="grey" />
                            </span>
                            Nairobi, Kenya
                        </div>
                    </div>
                </div>
                <div className="profile-middle">
                    <div className="profile-posts">
                        <span>431</span>
                            Posts
                    </div>
                    <div className="profile-posts">
                        <span>23k</span>
                            Friends
                    </div>
                </div>
                <div className="profile-bottom">
                    <div className="button-friends">
                        <button className="friends">
                            <span><CheckSlim height={15} color="white" /></span>
                                Friends
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
    )
}

export default StudentCard
