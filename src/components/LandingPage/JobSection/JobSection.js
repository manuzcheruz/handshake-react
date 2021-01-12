import React from 'react'
import JobCard from './JobCard/JobCard'

import './JobSection.css'

function JobSection() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
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
                    <div className="pagination">
                        <div className="pagination-items">
                            <div className="pagination-item">
                                1
                            </div>
                        </div>
                        <div className="pagination-items" style={{backgroundColor: '#55BC7E', color: 'white'}}>
                            <div className="pagination-item">
                                2
                            </div>
                        </div>
                        <div className="pagination-items">
                            <div className="pagination-item">
                                3
                            </div>
                        </div>
                        <div className="pagination-items">
                            <div className="pagination-item">
                                4
                            </div>
                        </div>
                        <div className="pagination-items">
                            <div className="pagination-item">
                                5
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobSection
