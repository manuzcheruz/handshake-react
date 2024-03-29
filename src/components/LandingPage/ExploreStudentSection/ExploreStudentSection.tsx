import React from 'react';
import HeadShake from 'react-reveal/HeadShake';
import Fade from 'react-reveal/Fade';
import { Search, Menu, Message, CheckSlim, Marker } from '../../../Assets/icons';
import { me, mem1, mem2, mem3, mem8, mem4, mem7 } from '../../../Assets/Images';

import './ExploreStudentSection.css';
import { Link } from 'react-router-dom';

function ExploreStudentSection(): JSX.Element {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
                <HeadShake>
                    <div className="students-wrapper">
                        <div className="student-display">
                            <Fade left>
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
                                                    <img alt='' src={mem2} height='70px' />
                                                </div>
                                                <div className="name">
                                                    Jane Doe
                                                </div>
                                                <div className="role">
                                                    Software Engineer
                                                </div>
                                                <div className="location">
                                                    <span className="icon-marker">
                                                        <Marker height={10} color="grey" />
                                                    </span>
                                                    University of Nairobi
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
                            </Fade>
                            <Fade right>
                                <div className="search-btn">
                                    <div className="icon-search">
                                        <Search height={15} color='white' />
                                    </div>
                                </div>
                            </Fade>
                            <Fade bottom>
                                <div className="search-bar">
                                    <div className="placeholder">
                                        Search job or keyword
                                    </div>
                                </div>
                            </Fade>
                            <Fade top>
                                <div className="jobholders">
                                    <div className="title">
                                        20,000+ Talented Job Holders
                                    </div>
                                    <div className="profile-images">
                                        <div className="items">
                                            <img alt='' src={mem4} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={mem4} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={mem7} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={mem8} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={me} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={mem4} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={mem4} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={mem3} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={mem2} height='50px' />
                                        </div>
                                        <div className="items">
                                            <img alt='' src={mem1} height='50px' />
                                        </div>
                                    </div>
                                </div>
                            </Fade>
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
                                <Link to='student-registration'>
                                    <button className="explore-btn" type="button">Explore More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </HeadShake>
            </div>
        </div>
    )
}

export default ExploreStudentSection;
