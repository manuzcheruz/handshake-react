import React from 'react'

import JobCard from '../../LandingPage/JobSection/JobCard/JobCard'
import Field from '../../../Shared/Field/Field'
import Button from '../../../Shared/Button/Button'

import './Jobs.css'

const fields = [
    {
        name: 'search',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Enter job keyword',
        // label: 'Your e-mail'
    }
]

function Jobs() {
    return (
        <div className="section" style={{backgroundColor: '#FAFAFB'}}>
            <div className="container">
                <div className="jobs-wrapper">
                    <div className="filters">
                        <div className="job-alert">
                            <div className="title">
                                Create Job Alert
                            </div>
                            <div className="text">
                                Create a job alert now and never miss a job.
                            </div>
                            <div className="job-alert-search">
                                {fields.map(item => {
                                    return (
                                        <Field
                                            key={item.name}
                                            {...item}
                                            height='35px'
                                            width='205px'
                                            border='none'
                                            />
                                    )
                                })}
                            </div>
                            <div className="job-alert-btn">
                                <Button
                                    name='Create Job Alerts'
                                    width='130px'
                                    height='30px'
                                    bgcolor='#55BC7E'
                                    color='white'
                                    radius='5px'
                                    border='none' />
                            </div>
                        </div>

                        <div className="filter">
                            <div className="employment-type">
                                <div className="title">
                                    Type of Employment
                                </div>
                            </div>
                            <div className="level">
                                <div className="title">
                                    Seniority Level
                                </div>
                            </div>
                            <div className="salary">
                                <div className="title">
                                    Salary Range
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs">
                        <div className="top">
                            <div className="no">
                                Showing 46 Jobs
                            </div>
                            <div className="sort">
                                Sort by:
                            </div>
                        </div>
                        <div className="all-jobs">
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                            <JobCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs
