import React from 'react';

import { Amazon, Apple, Be, Benz, Facebook, Google, Instagram, Linkedin, Microsoft, Safaricom, Slack, Tesla } from '../../../Assets/icons';
import Field from '../../../Shared/Field/Field';
import Button from '../../../Shared/Button/Button';
import Pagination from '../../../Shared/Pagination/Pagination';

import '../../Job/Jobs/Jobs.css';
import CenterCard from '../../Center/CenterCard/CenterCard';
import Messaging from '../../Messaging/Messaging';
import Aux from '../../../hoc/Aux';
import Navbar from '../../Navbar/Navbar';
import { PropsField } from '../../../Shared/interfaces';
import SearchBar from '../../../Shared/SearchBar/searchBar';

const fields: PropsField[] = [
    {
        name: 'search',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Enter job keyword',
        // label: 'Your e-mail'
    }
]

const companyFilters: PropsField[] = [
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
        name: 'manufacturing',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Manufacturing'
    },
    {
        name: 'Gis',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'GIS'
    },
    {
        name: 'real-estate',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Real Estate'
    },
    {
        name: 'auditing',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Auditing'
    },
    {
        name: 'automotive',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'Automotive'
    }
]

function Companies(): JSX.Element {
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className="container">
                    <Messaging />
                    <SearchBar />
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
                                        Types of Companies
                                    </div>
                                    <div className="items">
                                        {companyFilters.map(item => {
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
                                    Showing 20 Companies
                                </div>
                                <div className="sort">
                                    Sort by:
                                </div>
                            </div>
                            <div className="all-jobs" style={{gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '15px'}}>
                                <CenterCard 
                                    icon={<Tesla height={40} />}
                                    name='Tesla'
                                    location='Nairobi, Kenya'
                                    link='/companies/company'
                                    />
                                <CenterCard 
                                    icon={<Google height={40} />}
                                    name='Google'
                                    location='Amphire, US'
                                    />
                                <CenterCard 
                                    icon={<Microsoft height={40} />}
                                    name='Microsoft'
                                    location='Paris, France'
                                    />
                                <CenterCard 
                                    icon={<Instagram height={40} />}
                                    name='Instagram'
                                    location='Berlin, Germany'
                                    />
                                <CenterCard 
                                    icon={<Apple height={40} />}
                                    name='Be'
                                    location='New York, US'
                                    />
                                <CenterCard 
                                    icon={<Benz height={40} />}
                                    name='Lamborghini'
                                    location='Turin, Italy'
                                    />
                                <CenterCard 
                                    icon={<Amazon height={40} />}
                                    name='Amazon'
                                    location='Carlifonia, US'
                                    />
                                <CenterCard 
                                    icon={<Linkedin height={40} />}
                                    name='LInkedIn'
                                    location='Nairobi, Kenya'
                                    />
                                <CenterCard 
                                    icon={<Facebook height={40} />}
                                    name='Facebook'
                                    location='Tokyo, Japan'
                                    />
                                <CenterCard 
                                    icon={<Safaricom height={40} />}
                                    name='Safaricom'
                                    location='Paris, France'
                                    />
                                <CenterCard 
                                    icon={<Slack height={40} />}
                                    name='Slack'
                                    location='Nairobi, Kenya'
                                    />
                                <CenterCard 
                                    icon={<Be height={30} />}
                                    name='Behence'
                                    location='Cape Town, SA'
                                    />
                                <CenterCard 
                                    icon={<Google height={40} />}
                                    name='Google'
                                    location='London, UK'
                                    />
                                <CenterCard 
                                    icon={<Tesla height={40} />}
                                    name='Tesla'
                                    location='San Fransisco, US'
                                    />
                                <CenterCard 
                                    icon={<Instagram height={40} />}
                                    name='Instagram'
                                    location='Nairobi, Kenya'
                                    />
                                <CenterCard 
                                    icon={<Microsoft height={40} />}
                                    name='Microsoft'
                                    location='Nairobi, Kenya'
                                    />
                                <CenterCard 
                                    icon={<Benz height={40} />}
                                    name='Microsoft'
                                    location='Nairobi, Kenya'
                                    />
                                <CenterCard 
                                    icon={<Amazon height={40} />}
                                    name='Google'
                                    location='Nairobi, Kenya'
                                    />
                                <CenterCard 
                                    icon={<Linkedin height={40} />}
                                    name='Microsoft'
                                    location='Nairobi, Kenya'
                                    />
                                <CenterCard 
                                    icon={<Facebook height={40} />}
                                    name='Instagram'
                                    location='Nairobi, Kenya'
                                    />
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>

        </Aux>
    )
}

export default Companies;

