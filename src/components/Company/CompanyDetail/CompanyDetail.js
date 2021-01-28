import React from 'react'
import { Amazon, Apple, Benz, Facebook, Google, Instagram, Linkedin, Marker, Microsoft, Safaricom, Share, Tesla } from '../../../Assets/icons'
import Aux from '../../../hoc/Aux'
import Pagination from '../../../Shared/Pagination/Pagination'
import CenterCard from '../../Center/CenterCard/CenterCard'
import JobCard from '../../LandingPage/JobSection/JobCard/JobCard'
import Navbar from '../../Navbar/Navbar'

import appleImage from '../../../Assets/Images/apple.jpeg'

import './CompanyDetail.css'
import Messaging from '../../Messaging/Messaging'

function CompanyDetail() {
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className="container">
                    <Messaging />
                    <div className="company-detail-wrapper">
                        <div className="profile">
                            <div className="top">
                                <div className="bg-image">
                                    <img alt='' src={appleImage} height='auto' width='100%' />
                                </div>
                                <div className="top-bottom-block">
                                    <div className="small-image-block">
                                        <div className="image">
                                            <div className="logo">
                                                <Apple height={90} />
                                            </div>
                                        </div>
                                        <div className="name">
                                            <div className="title">
                                                Apple Inc.
                                            </div>
                                            <div className="subtitle">
                                                <span><Marker height={15} /></span>
                                                Amphire Theater, CA, USA
                                            </div>
                                        </div>
                                    </div>
                                    <div className="social">
                                        <div className="icons">
                                            <span>
                                                <Share height={20} color='grey' />
                                            </span>
                                        </div>
                                        <div className="icons">
                                            <span>
                                                <Linkedin height={20} />
                                            </span>
                                        </div>
                                        <div className="icons">
                                            <span>
                                                <Facebook height={20} />
                                            </span>
                                        </div>
                                        <div className="icons">
                                            <span>
                                                <Instagram height={20} />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="middle">
                                <div className="about">
                                    <div className="title">
                                        About Us
                                    </div>
                                    <div className="content">

                                    </div>
                                </div>
                                <div className="activity">
                                    <div className="title">
                                        Events
                                    </div>
                                    <div className="content">

                                    </div>
                                </div>
                            </div>
                            
                            <div className="jobs-block">
                                <div className="title-job-bottom">
                                    Recently <span>Posted</span> Jobs
                                </div>
                                <div className="jobs">
                                    <JobCard logo={<Linkedin height={60} />} />
                                    <JobCard logo={<Facebook height={60} />} />
                                    <JobCard logo={<Instagram height={60} />} />
                                    <JobCard logo={<Google height={60} />} />
                                    <JobCard logo={<Tesla height={60} />} />
                                    <JobCard logo={<Safaricom height={60} />} />
                                </div>
                            </div>
                            <Pagination />
                        </div>
                        <div className="similar-companies">
                            <div className="title">
                                Similar <span>Companies</span>
                            </div>
                            <CenterCard 
                                    icon={<Tesla height={40} />}
                                    name='Tesla'
                                    location='Nairobi, Kenya'
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
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default CompanyDetail
