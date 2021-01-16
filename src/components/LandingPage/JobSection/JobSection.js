import React from 'react'
import Fade from 'react-reveal/Fade'
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
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                        </div>
                        <Pagination />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default JobSection
