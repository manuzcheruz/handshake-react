import React from 'react';
import { connect } from 'react-redux';

import { me, mem1, mem2, mem3, mem4, mem5, mem6, mem7, mem8 } from '../../../Assets/Images'
import Field from '../../../Shared/Field/Field'
import Button from '../../../Shared/Button/Button'
import Pagination from '../../../Shared/Pagination/Pagination'

import '../../Job/Jobs/Jobs.css'
import StudentCard from '../StudentCard/StudentCard'
import Messaging from '../../Messaging/Messaging'
import Aux from '../../../hoc/Aux'
import Navbar from '../../Navbar/Navbar'
import { Link } from 'react-router-dom'
import SearchBar from '../../../Shared/SearchBar/searchBar'

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

const studentArr = [
    {
        name: 'John Doe',
        center: 'University of Nairobi',
        friends: 300,
        posts: 15,
        role: 'Sofware Engineer',
        img: <img alt='' src={me} height='70px'/>
    },
    {
        name: 'Jane Doe',
        center: 'University of Nairobi',
        friends: 450,
        posts: 30,
        role: 'Sofware Engineer',
        img: <img alt='' src={mem1} height='70px'/>
    },
    {
        name: 'Jane Doe',
        center: 'University of Nairobi',
        friends: 46,
        posts: 2,
        role: 'Sofware Engineer',
        img: <img alt='' src={mem2} height='70px'/>
    },
    {
        name: 'Jane Doe',
        center: 'University of Nairobi',
        friends: 455,
        posts: 32,
        role: 'Sofware Engineer',
        img: <img alt='' src={mem3} height='70px'/>
    },
    {
        name: 'John Doe',
        center: 'University of Nairobi',
        friends: 49,
        posts: 3,
        role: 'Sofware Engineer',
        img: <img alt='' src={mem4} height='70px'/>
    },
    {
        name: 'John Doe',
        center: 'University of Nairobi',
        friends: 390,
        posts: 31,
        role: 'Sofware Engineer',
        img: <img alt='' src={mem5} height='70px'/>
    },
    {
        name: 'John Doe',
        center: 'University of Nairobi',
        friends: 498,
        posts: 40,
        role: 'Sofware Engineer',
        img: <img alt='' src={mem6} height='70px'/>
    },
    {
        name: 'Jane Doe',
        center: 'University of Nairobi',
        friends: 501,
        posts: 36,
        role: 'Sofware Engineer',
        img: <img alt='' src={mem7} height='70px'/>
    },
    {
        name: 'Jane Doe',
        center: 'University of Nairobi',
        friends: 600,
        posts: 78,
        role: 'Sofware Engineer',
        img: <img alt='' src={mem8} height='70px'/>
    },

]

function Students(props) {
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <Messaging bottom='0px' right='0px' />
                <SearchBar student />
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
                                        size='0.6rem'
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
                                {studentArr.map((item, i) => {
                                    return (
                                        <Link key={i} to='students/student'>
                                            <StudentCard {...item} />
                                        </Link>
                                    )
                                })}
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default connect(null, null)(Students);

