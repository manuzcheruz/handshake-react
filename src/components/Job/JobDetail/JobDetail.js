import React from 'react'
import { Link } from 'react-router-dom'

import { Heart, Marker, Microsoft, Share } from '../../../Assets/icons'
import Similar from './similar/similar'
import Button from '../../../Shared/Button/Button'
import Messaging from '../../Messaging/Messaging'

import Micro from '../../../Assets/Images/micro.jpg'
import './JobDetail.css'

function JobDetail() {
    return (
        <div className="section" style={{backgroundColor: '#FAFAFB'}}>
            <div className="container">
                <Messaging />
                <div className="jobdetail-wrapper">
                    <div className="side-panel">
                        <div className="top">
                            <div className="image-thumbnail">

                            </div>
                            <div className="image-smaller">

                            </div>
                            <div className="name">
                                John Doe
                            </div>
                            <div className="role">
                                Bsc. Electrical and Electronic Eng. 
                            </div>
                            <div className="views">
                                profile views - 460 views
                            </div>
                            <div className="connections">
                                peers - 3k
                            </div>
                        </div>
                        <div className="recent">
                            <div className="title">
                                Recent
                            </div>
                        </div>
                        <div className="groups">
                            <div className="title">
                                Groups
                            </div>
                        </div>
                        <div className="events">
                            <div className="title">
                                Events
                            </div>
                        </div>
                    </div>
                    <div className="job-detail">
                        <div className="bg">
                            <img alt='' src={Micro} height='auto' width='100%' />
                        </div>
                        <div className="logo">
                            <div className="icon-logo">
                                <Microsoft height={70} color='yellow' />
                            </div>
                        </div>
                        <div className="top">
                            <div className="name">
                                <div className="title">
                                    User Interface Designer
                                </div>
                                <div className="icons">
                                    <div className="icon-heart">
                                        <div style={{marginTop: '7px', marginLeft: '6px'}}>
                                            <Heart height={25} color='red' />
                                        </div>
                                    </div>
                                    <div className="icon-share">
                                        <div style={{marginTop: '5px', marginLeft: '7px'}}>
                                            <Share height={25} color='grey' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="location">
                                <div className="subtitle">
                                    <span style={{fontWeight: 'bold'}}>Microsoft</span>
                                    <span style={{marginLeft: '5px', marginRight: '5px', color: 'black'}}>|</span>
                                    <span style={{marginRight: '5px'}}>
                                        <Marker height={15} color="grey" />
                                    </span>
                                    <span className="loc" style={{color: 'grey'}}>
                                        Nairobi, Kenya
                                    </span>
                                </div>
                                <div className="date">
                                    Posted 6 days ago
                                    <span>
                                        &#8226; 67 Applicants
                                    </span>
                                </div>
                            </div>
                            <div className="table">
                                <div className="item1">
                                    <div className="title">
                                        Experience
                                    </div>
                                    <div className="subtitle">
                                        Minimum 1 year
                                    </div>
                                </div>
                                <div className="item2">
                                    <div className="title">
                                        Work Level
                                    </div>
                                    <div className="subtitle">
                                        Senior Level
                                    </div>
                                </div>
                                <div className="item3">
                                    <div className="title">
                                        Employee Type
                                    </div>
                                    <div className="subtitle">
                                        Full Time Job
                                    </div>
                                </div>
                                <div className="item4">
                                    <div className="title">
                                        Offer Salary
                                    </div>
                                    <div className="subtitle">
                                        $400 / month
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overview">
                            <div className="title">
                                Overview
                            </div>
                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis elit mi, ut dignissim eros tempus blandit. Aenean laoreet augue ac dui tincidunt congue. Pellentesque vitae tincidunt nisl. Vivamus massa turpis, vehicula ut ultricies a, fermentum vitae justo. Nunc malesuada eget massa in euismod. Pellentesque nec turpis id mi gravida dapibus nec in orci. Nunc sodales maximus ante sodales scelerisque. Donec elementum ex urna, at iaculis libero faucibus vitae. Aliquam et lacus sed nulla commodo facilisis vel in mi.
                            </div>
                        </div>
                        <div className="description">
                            <div className="title">
                                Job Description
                            </div>
                            <div className="content">
                                Vestibulum imperdiet tincidunt diam, nec blandit ipsum interdum ut. Maecenas consectetur risus eu lectus laoreet, blandit bibendum felis finibus. <br />&nbsp; &nbsp; &#8226; Aenean massa velit, interdum nec ullamcorper eget, volutpat at augue.  <br />&nbsp; &nbsp; &#8226; Vivamus sed nisl commodo, consectetur magna nec, elementum dolor. <br />&nbsp; &nbsp; &#8226; Fusce accumsan porta ligula eget aliquam. Fusce ac dui sagittis, tempor sem et.

                                <br />&nbsp; &nbsp; &#8226; Nullam a consectetur sapien, eu rutrum nisi. In hac habitasse platea dictumst. 
                                <br />&nbsp; &nbsp; &#8226; Nullam a consectetur sapien, eu rutrum nisi. In hac habitasse platea dictumst. 
                            </div>
                        </div>
                        <div className="btn-apply">
                            <Link >
                                <Button 
                                    name='Apply Now'
                                    color='white'
                                    bgcolor='#55BC7E'
                                    radius='5px'
                                    width='150px'
                                    height='30px'
                                    size='0.9rem'
                                    border='none'
                                    />
                            </Link>
                        </div>
                    </div>
                    <div className="similar-jobs">
                        <div className="title">
                            Similar 
                            <span>
                                Jobs
                            </span>
                        </div>
                        <Similar />
                        <Similar />
                        <Similar />
                        <Similar />
                        <Similar />
                        <Similar />
                        <Similar />
                        <div className="btn-more" style={{marginTop: '30px'}}>
                            <Link to='/jobs' >
                                <Button 
                                    name='View More'
                                    color='white'
                                    bgcolor='#55BC7E'
                                    radius='5px'
                                    width='150px'
                                    height='30px'
                                    size='0.9rem'
                                    border='none'
                                    />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail
