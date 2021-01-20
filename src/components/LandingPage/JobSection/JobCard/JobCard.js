import React from 'react'
import { Link } from 'react-router-dom'
import { Bookmark, Calendar, Instagram } from '../../../../Assets/icons'

import './JobCard.css'

function JobCard() {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-body-top">
                    <div className="thumbnail">
                        <div className="icon-thumbnail">
                            <Instagram height={60} />
                        </div>
                    </div>
                    <div className="title">
                        <div className="title-head">
                            Slack, New York
                        </div>
                        <div className="title-subhead">
                            Sr. Product Designer
                        </div>
                        <div className="title-small">
                            2 days ago
                        </div>
                    </div>
                    <div className="bookmark">
                        <div className="icon-bookmark">
                            <Bookmark height={20} color="grey" />
                        </div>
                        <div className="calendar">
                            <span className="icon-calendar">
                                <Calendar height={10} color="FF9066" />
                            </span>
                            <span className="time">Full Time</span>
                        </div>
                    </div>
                </div>
                <div className="card-body-middle">
                    <p className="card-content">
                        We are looking for a senior Product designer for your design team.
                    </p>
                </div>
                <div className="card-body-bottom">
                    <div className="apply-button">
                        <Link to="/jobs/job">
                            <button type='button'>Apply Now</button>
                        </Link> 
                    </div>
                    <div className="others">
                        <div className="item"></div>
                        <div className="items"></div>
                        <div className="items"></div>
                        <div className="items"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard
