import React from 'react'
import { Map, Marker as GoogleMarker, GoogleApiWrapper } from 'google-maps-react';

import { Marker, Share, Linkedin, Facebook, Instagram, Campus2, Campus3, Campus4, Campus5, Campus6 } from '../../../Assets/icons'
import Aux from '../../../hoc/Aux'
import CenterCard from '../../Center/CenterCard/CenterCard'
import Navbar from '../../Navbar/Navbar'
import Messaging from '../../Messaging/Messaging'

import uon from '../../../Assets/Images/uon.jpg'

import '../../Company/CompanyDetail/CompanyDetail.css'

function CenterDetail(props) {
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
                                    <img alt='' src={uon} height='auto' width='100%' />
                                </div>
                                <div className="top-bottom-block">
                                    <div className="small-image-block">
                                        <div className="image">
                                            <div className="logo">
                                                <Campus3 height={85} />
                                            </div>
                                        </div>
                                        <div className="name">
                                            <div className="title">
                                                University of Nairobi
                                            </div>
                                            <div className="subtitle">
                                                <span><Marker height={15} /></span>
                                                Nairobi, Kenya
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

                                    </div>
                                </div>
                                <div className="activity">
                                    <div className="title">
                                        Events
                                    </div>
                                    <div className="content" style={{marginTop: '15px'}}>
                                        <div className="item" style={{height: '70px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', marginBottom: '10px'}}>
                                            <div className="image" style={{height: '70px', width: '100%', backgroundColor: 'indigo', borderRadius: '10px'}}>

                                            </div>
                                            <div className="cont">
                                                <div className="title" style={{height: '20px', width: '50%', marginTop: '3px', backgroundColor: 'teal'}}>

                                                </div>
                                                <div className="content" style={{height: '35px', width: '100%',marginTop: '7px', backgroundColor: 'yellow'}}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="item" style={{height: '70px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px'}}>
                                            <div className="image" style={{height: '70px', width: '100%', backgroundColor: 'indigo', borderRadius: '10px'}}>

                                            </div>
                                            <div className="cont">
                                                <div className="title" style={{height: '20px', width: '50%', marginTop: '3px', backgroundColor: 'teal'}}>

                                                </div>
                                                <div className="content" style={{height: '35px', width: '100%',marginTop: '7px', backgroundColor: 'yellow'}}>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="jobs-block">
                                <div className="title-job-bottom">
                                    <span>News</span> & Updates
                                </div>
                                <div className="news" style={{display: 'grid', gridTemplateColumns: '1fr 0.8fr', gridGap: '40px', marginTop: '15px'}}>
                                    <div className="main" style={{height: '430px', width: '100%'}}>
                                        <div className="image" style={{height: '280px', width: '100%', backgroundColor: 'yellow', borderRadius: '10px'}}>

                                        </div>
                                        <div className="time" style={{marginTop: '10px', height: '20px', backgroundColor: 'blue', width: '30%'}}>

                                        </div>
                                        <div className="title" style={{marginTop: '10px', height: '40px', backgroundColor: 'green', width: '100%'}}>

                                        </div>
                                        <div className="content" style={{marginTop: '10px', height: '60px', backgroundColor: 'red', width: '100%'}}>

                                        </div>
                                    </div>
                                    <div className="others">
                                        <div className="item" style={{height: '100px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', borderRadius: '10px', marginBottom: '10px'}}>
                                            <div className="image" style={{height: '100px', width: '100%', borderRadius: '6px', backgroundColor: 'lime'}}>

                                            </div>
                                            <div className="content">
                                                <div className="top" style={{marginTop: '5px', height: '20px', backgroundColor: 'teal', width: '30%'}}>

                                                </div>
                                                <div className="bottom" style={{marginTop: '10px', height: '50px', backgroundColor: 'red', width: '100%'}}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="item" style={{height: '100px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', borderRadius: '10px', marginBottom: '10px'}}>
                                            <div className="image" style={{height: '100px', width: '100%', borderRadius: '6px', backgroundColor: 'lime'}}>

                                            </div>
                                            <div className="content">
                                                <div className="top" style={{marginTop: '5px', height: '20px', backgroundColor: 'teal', width: '30%'}}>

                                                </div>
                                                <div className="bottom" style={{marginTop: '10px', height: '50px', backgroundColor: 'red', width: '100%'}}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="item" style={{height: '100px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', borderRadius: '10px', marginBottom: '10px'}}>
                                            <div className="image" style={{height: '100px', width: '100%', borderRadius: '6px', backgroundColor: 'lime'}}>

                                            </div>
                                            <div className="content">
                                                <div className="top" style={{marginTop: '5px', height: '20px', backgroundColor: 'teal', width: '30%'}}>

                                                </div>
                                                <div className="bottom" style={{marginTop: '10px', height: '50px', backgroundColor: 'red', width: '100%'}}>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="item" style={{height: '100px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', borderRadius: '10px', marginBottom: '10px'}}>
                                            <div className="image" style={{height: '100px', width: '100%', borderRadius: '6px', backgroundColor: 'lime'}}>

                                            </div>
                                            <div className="content">
                                                <div className="top" style={{marginTop: '5px', height: '20px', backgroundColor: 'teal', width: '30%'}}>

                                                </div>
                                                <div className="bottom" style={{marginTop: '10px', height: '50px', backgroundColor: 'red', width: '100%'}}>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="social-media">
                            </div>
                        </div>
                        <div className="similar-companies">
                            <div className="title">
                                Similar <span>Campuses</span>
                            </div>
                            <div className="similar-companies-wrapper">
                                <CenterCard 
                                        icon={<Campus6 height={40} />}
                                        name='Tesla'
                                        location='Nairobi, Kenya'
                                        />
                                    <CenterCard 
                                        icon={<Campus2 height={40} />}
                                        name='Google'
                                        location='Amphire, US'
                                        />
                                    <CenterCard 
                                        icon={<Campus3 height={40} />}
                                        name='Microsoft'
                                        location='Paris, France'
                                        />
                                    <CenterCard 
                                        icon={<Campus4 height={40} />}
                                        name='Instagram'
                                        location='Berlin, Germany'
                                        />
                                    <CenterCard 
                                        icon={<Campus5 height={40} />}
                                        name='Be'
                                        location='New York, US'
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

export default GoogleApiWrapper({apiKey: 'AIzaSyAok6R5nza1EEHCpuPHj8m6sV5HiQGH4o4'})(CenterDetail)
