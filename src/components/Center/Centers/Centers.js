import React from 'react'

import { School } from '../../../Assets/icons'
import Field from '../../../Shared/Field/Field'
import Button from '../../../Shared/Button/Button'
import Pagination from '../../../Shared/Pagination/Pagination'

import '../../Job/Jobs/Jobs.css'
import CenterCard from '../CenterCard/CenterCard'

const fields = [
    {
        name: 'search',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Enter job keyword',
        // label: 'Your e-mail'
    }
]

const centerFilters = [
    {
        name: 'technology',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Technology'
    },
    {
        name: 'media',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Media'
    },
    {
        name: 'finance',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Finance'
    },
    {
        name: 'marketing',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Marketing'
    },
    {
        name: 'education',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Education'
    },
    {
        name: 'government',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Government'
    },
    {
        name: 'agriculture',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Agriculture'
    },
    {
        name: 'engineering',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Engineering'
    }
]

function Centers() {
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
                                    Types of Campuses
                                </div>
                                <div className="items">
                                    {centerFilters.map(item => {
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
                                Showing 25 Campuses
                            </div>
                            <div className="sort">
                                Sort by:
                            </div>
                        </div>
                        <div className="all-jobs" style={{gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '15px'}}>
                            <CenterCard 
                                icon={<School height={40} />}
                                name='Dekut'
                                location='Nyeri, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='UON'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='JKUAT'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='KU'
                                location='Ruiru, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='UON'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='KU'
                                location='Ruiru, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='Dekut'
                                location='Nyeri, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='JKUAT'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='UON'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='KU'
                                location='Ruiru, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='JKUAT'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='Dekut'
                                location='Nyeri, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='KU'
                                location='Ruiru, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='UON'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='JKUAT'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='Dekut'
                                location='Nyeri, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='UON'
                                location='Nairobi, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='KU'
                                location='Ruiru, Kenya'
                                />
                            <CenterCard 
                                icon={<School height={40} />}
                                name='Dekut'
                                location='Nyeri, Kenya'
                                />
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Centers

