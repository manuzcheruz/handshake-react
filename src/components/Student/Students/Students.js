import React from 'react'

// import {  } from '../../../Assets/icons'
import Field from '../../../Shared/Field/Field'
import Button from '../../../Shared/Button/Button'
import Pagination from '../../../Shared/Pagination/Pagination'

import '../../Job/Jobs/Jobs.css'
import StudentCard from '../StudentCard/StudentCard'
import Messaging from '../../Messaging/Messaging'

const fields = [
    {
        name: 'search',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Enter job keyword',
        // label: 'Your e-mail'
    }
]

const studentFilters = [
    {
        name: 'freshman',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Freshman Level'
    },
    {
        name: 'sophomore',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Sophomore Level'
    },
    {
        name: 'junior',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Junior Level'
    },
    {
        name: 'senior',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Senior Level'
    },
    {
        name: 'graduate',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Graduate Level'
    }
]

function Students() {
    return (
        <div className="section" style={{backgroundColor: '#FAFAFB'}}>
            <Messaging bottom='0px' right='0px' />
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
                                    Types of Students
                                </div>
                                <div className="items">
                                    {studentFilters.map(item => {
                                        return (
                                            <Field
                                                {...item} />
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs">
                        <div className="top">
                            <div className="no">
                                Showing 33 Students
                            </div>
                            <div className="sort">
                                Sort by:
                            </div>
                        </div>
                        <div className="all-jobs" style={{gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '15px'}}>
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                            <StudentCard />
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students

