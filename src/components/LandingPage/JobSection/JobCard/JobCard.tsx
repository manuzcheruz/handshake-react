import React from 'react'
import { Link } from 'react-router-dom'
import { Bookmark, Calendar } from '../../../../Assets/icons'
import { mem1, mem2, mem3} from '../../../../Assets/Images'

import './JobCard.css';

export interface PropsJobCard {
    logo: any;
}

function JobCard(props: PropsJobCard) {
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-body-top">
                    <div className="thumbnail">
                        <div className="icon-thumbnail">
                            {props.logo}
                        </div>
                    </div>
                    <div className="title">
                        <div className="title-head">
                            Sr. Product Designer
                        </div>
                        <div className="title-subhead">
                            Slack, New York
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
                        <div className="item">
                            <img alt='' src={mem2} height='35px' />
                            {/* <img alt='' src={mem8} height='35px' /> */}
                        </div>
                        <div className="items">
                            <img alt='' src={mem1} height='35px' />
                        </div>
                        <div className="items">
                            <img alt='' src={mem3} height='35px' />
                        </div>
                        <div className="items" style={{backgroundColor: '#FF9066'}}>
                            <div style={{marginLeft: '5px', fontSize: '0.75rem', marginTop: '11px'}}>
                                107+
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCard;
