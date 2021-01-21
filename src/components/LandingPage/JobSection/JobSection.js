import React from 'react'
import Fade from 'react-reveal/Fade'
import { Microsoft, Slack, Apple, Linkedin, Facebook, Instagram } from '../../../Assets/icons'
import Pagination from '../../../Shared/Pagination/Pagination'
import JobCard from './JobCard/JobCard'

import './JobSection.css'

function JobSection() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
                <Fade bottom>
                    <div className="job-wrapper">
                        <h3 className="job-wrapper-title">
                            Latest <span>Jobs</span> Here
                        </h3>
                        <div className="jobs">
                            <JobCard logo={<Microsoft height={60} />} />
                            <JobCard logo={<Slack height={60} />} />
                            <JobCard logo={<Apple height={60} />} />
                            <JobCard logo={<Linkedin height={60} />} />
                            <JobCard logo={<Facebook height={60} />} />
                            <JobCard logo={<Instagram height={60} />} />
                        </div>
                        <Pagination />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default JobSection
