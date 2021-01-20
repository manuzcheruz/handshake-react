import React from 'react'
import { Heart, Marker } from '../../../Assets/icons'

import './JobDetail.css'
import Similar from './similar/similar'

function JobDetail() {
    return (
        <div className="section" style={{backgroundColor: '#FAFAFB'}}>
            <div className="container">
                <div className="jobdetail-wrapper">
                    <div className="side-panel" style={{height: '100vh', width: '100%', backgroundColor: 'yellow', borderRadius: '10px'}}>

                    </div>
                    <div className="job-detail">
                        <div className="bg">

                        </div>
                        <div className="logo">

                        </div>
                        <div className="top">
                            <div className="name">
                                <div className="title">
                                    User Interface Designer
                                </div>
                                <div className="icons">
                                    <div className="icon-heart">
                                        <span>
                                            <Heart height={25} color='red' />
                                        </span>
                                    </div>
                                    <div className="icon-share">
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
                                <div className="item1"></div>
                                <div className="item2"></div>
                                <div className="item3"></div>
                                <div className="item4"></div>
                            </div>
                        </div>
                        <div className="overview">
                            <div className="title">
                                Overview
                            </div>
                            <div className="content">

                            </div>
                        </div>
                        <div className="description">
                            <div className="title">
                                Job Description
                            </div>
                            <div className="content">
                                
                            </div>
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
                        <Similar />
                        <Similar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail
