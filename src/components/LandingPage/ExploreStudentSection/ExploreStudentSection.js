import React from 'react'
import { Search, Menu, Message, CheckSlim, Marker } from '../../../Assets/icons'

import './ExploreStudentSection.css'

function ExploreStudentSection() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
                <div className="students-wrapper">
                    <div className="student-display">
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
                                        <button className="message">
                                            <span><Message height={15} color="black" /></span>
                                            Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="search-btn">
                            <div className="icon-search">
                                <Search height={15} color='white' />
                            </div>
                        </div>
                        <div className="search-bar">
                            <div className="placeholder">
                                Search job or keyword
                            </div>
                        </div>
                        <div className="jobholders">
                            <div className="title">
                                20,000+ Talented Job Holders
                            </div>
                        </div>
                        <div className="circle"></div>
                    </div>
                    <div className="student-message">
                        <div className="title">
                            Get World <span>20,000+</span> talented students in one place.
                        </div>
                        <div className="content">
                            Our platform boasts a large number of talented students from Kenyan universities that are either holding jobs in various top tier companies or actively looking for them.
                        </div>
                        <div className="button">
                            <button className="explore-btn" type="button">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreStudentSection
