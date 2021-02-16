import React from 'react'
import { Map, Marker as GoogleMarker, GoogleApiWrapper } from 'google-maps-react';

import { Apple, Benz, Facebook, Google, Instagram, Linkedin, Marker, Microsoft, Share, Tesla } from '../../../Assets/icons'
import Aux from '../../../hoc/Aux'
import Pagination from '../../../Shared/Pagination/Pagination'
import CenterCard from '../../Center/CenterCard/CenterCard'
import JobCard from '../../LandingPage/JobSection/JobCard/JobCard'
import Navbar from '../../Navbar/Navbar'
import Messaging from '../../Messaging/Messaging'

import appleImage from '../../../Assets/Images/apple.jpeg'
import apple1 from '../../../Assets/Images/apple1.png';
import apple2 from '../../../Assets/Images/apple2.png';

import './CompanyDetail.css'

function CompanyDetail(props) {
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
                                        About <span>Us</span>
                                    </div>
                                    <div className="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper turpis id dignissim vehicula. Nam at lacus arcu. Phasellus non velit quis justo maximus fringilla ac id neque. Nam eu auctor nisi, ut volutpat erat. Ut sit amet pulvinar mi, eget efficitur metus. Cras mattis pharetra sem ac pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus ac tempus nisi.
                                    </div>
                                </div>
                                <div className="activity">
                                    <div className="title">
                                        Events
                                    </div>
                                    <div className="content" style={{marginTop: '15px'}}>
                                        <div className="item" style={{height: '70px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', marginBottom: '10px'}}>
                                            <div className="image" style={{height: '70px', width: '100%', borderRadius: '10px'}}>
                                                <img src={apple1} height="70px" alt="" style={{borderRadius: '10px'}} />
                                            </div>
                                            <div className="cont">
                                                <div className="time" style={{height: '20px', width: '100%', marginTop: '3px', fontSize: '0.6rem', color: 'grey'}}>
                                                    October 13, 2020
                                                </div>
                                                <div className="title" style={{height: '35px', width: '100%', fontSize: '1rem', lineHeight: '18px'}}>
                                                    Introducing iPhone 12 and iPhone 12 Pro with 5G...
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item" style={{height: '70px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px'}}>
                                            <div className="image" style={{height: '70px', width: '100%', borderRadius: '10px'}}>
                                                <img src={apple2} height="70px" alt="" style={{borderRadius: '10px'}} />
                                            </div>
                                            <div className="cont">
                                                <div className="time" style={{height: '20px', width: '100%', marginTop: '3px', fontSize: '0.6rem', color: 'grey'}}>
                                                    September 15, 2020
                                                </div>
                                                <div className="title" style={{height: '35px', width: '100%', fontSize: '1rem', lineHeight: '18px'}}>
                                                    Introducing Apple Watch Series 6...
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="jobs-block">
                                <div className="title-job-bottom">
                                    Recently <span>Posted</span> Jobs
                                </div>
                                <div className="jobs">
                                    <JobCard logo={<Apple height={60} />} />
                                    <JobCard logo={<Apple height={60} />} />
                                    <JobCard logo={<Apple height={60} />} />
                                    <JobCard logo={<Apple height={60} />} />
                                    <JobCard logo={<Apple height={60} />} />
                                    <JobCard logo={<Apple height={60} />} />
                                </div>
                            </div>
                            <Pagination />
                        </div>
                        <div className="similar-companies">
                            <div className="title">
                                Similar <span>Companies</span>
                            </div>
                            <div className="similar-companies-wrapper">
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
                            </div>
                            <div className="location-map">
                                <div className="title">
                                    Location
                                </div>
                                <div className="map">
                                    <Map
                                    google={props.google}
                                    zoom={10}
                                    style={{width: '250px', height: '250px', borderRadius: '10px'}}
                                    initialCenter={{ lat: 0.38, lng: 35.8}}
                                    >
                                        <GoogleMarker title='business location' position={{ lat: 0.38, lng: 35.8}} />
                                    </Map>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default GoogleApiWrapper({apiKey: 'AIzaSyAok6R5nza1EEHCpuPHj8m6sV5HiQGH4o4'})(CompanyDetail)
