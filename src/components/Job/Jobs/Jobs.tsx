import React from 'react';

import Aux from '../../../hoc/Aux';
import Navbar from '../../Navbar/Navbar';
import JobCard from '../../LandingPage/JobSection/JobCard/JobCard';
import Field from '../../../Shared/Field/Field';
import Button from '../../../Shared/Button/Button';
import Pagination from '../../../Shared/Pagination/Pagination';

import './Jobs.css';
import Messaging from '../../Messaging/Messaging';
import { Amazon, Apple, Benz, Facebook, Google, Instagram, Linkedin, Microsoft, Safaricom, Slack, Tesla } from '../../../Assets/icons'
import SearchBar from '../../../Shared/SearchBar/searchBar'
import { PropsField } from '../../../Shared/interfaces'

const fields: PropsField[] = [
    {
        name: 'search',
        elementName: 'input',
        elementType: 'checkbox',
        placeholder: 'Enter job keyword'
    }
]

const employmentFilters: PropsField[] = [
    {
        name: 'full',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Full Time Jobs'
    },
    {
        name: 'part',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Part Time Jobs'
    },
    {
        name: 'remote',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Remote Jobs'
    },
    {
        name: 'internship',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Internship Jobs'
    },
    {
        name: 'contract',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Contract'
    },
    {
        name: 'training',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Training Jobs'
    }
]

const levelFilters: PropsField[] = [
    {
        name: 'freshman',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'First Year'
    },
    {
        name: 'sophomore',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Second Year'
    },
    {
        name: 'junior',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Third Year'
    },
    {
        name: 'senior',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Final Year'
    },
    {
        name: 'graduate',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Graduate Level'
    }
]

const salaryFilters: PropsField[] = [
    {
        name: 'first',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'less than ksh 10,000'
    },
    {
        name: 'second',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'ksh 10,000 - ksh 20,000'
    },
    {
        name: 'third',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'ksh 20,000 - ksh 30,000'
    },
    {
        name: 'senior',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'ksh 30,000 - ksh 50,000'
    },
    {
        name: 'graduate',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'over ksh 50,000'
    }
]

/**
 * this component renders the jobs and can be filtered 
 * @returns 
 */
function Jobs(): JSX.Element {
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className="container">
                    <Messaging />
                    <SearchBar job />
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
                                        Type of Employment
                                    </div>
                                    <div className="items">
                                        {employmentFilters.map(item => {
                                            return (
                                                <Field
                                                    {...item} />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="level">
                                    <div className="title">
                                        Seniority Level
                                    </div>
                                    <div className="items">
                                        {levelFilters.map(item => {
                                            return (
                                                <Field
                                                    {...item} />
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="salary">
                                    <div className="title">
                                        Salary Range
                                    </div>
                                    <div className="items">
                                        {salaryFilters.map(item => {
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
                                    Showing 46 Jobs
                                </div>
                                <div className="sort">
                                    Sort by:
                                </div>
                            </div>
                            <div className="all-jobs">
                                <JobCard logo={<Microsoft height={60} />} />
                                <JobCard logo={<Slack height={60} />} />
                                <JobCard logo={<Apple height={60} />} />
                                <JobCard logo={<Linkedin height={60} />} />
                                <JobCard logo={<Facebook height={60} />} />
                                <JobCard logo={<Instagram height={60} />} />
                                <JobCard logo={<Google height={60} />} />
                                <JobCard logo={<Tesla height={60} />} />
                                <JobCard logo={<Safaricom height={60} />} />
                                <JobCard logo={<Benz height={60} />} />
                                <JobCard logo={<Amazon height={60} />} />
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default Jobs;
