import React, { useEffect } from 'react'
import { Map, Marker as GoogleMarker, GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions';

import { Marker, Share, Linkedin, Facebook, Instagram, Campus2, Campus3, Campus4, Campus5, Campus6 } from '../../../Assets/icons'
import Aux from '../../../hoc/Aux'
import CenterCard from '../../Center/CenterCard/CenterCard'
import Navbar from '../../Navbar/Navbar'
import Messaging from '../../Messaging/Messaging'

import uon1 from '../../../Assets/Images/uon1.png';
import uon2 from '../../../Assets/Images/uon2.png';
import uon3 from '../../../Assets/Images/uon3.png';
import uon4 from '../../../Assets/Images/uon4.png';

import '../../Company/CompanyDetail/CompanyDetail.css'
import CenterNewsCard from '../CenterNews/CenterNewsCard';

const news = [
    {
        title: 'Graduate Education and What Lies Ahead',
        time: 'Wednesday, February 24, 2021',
        image: <img src={uon4} width="100%" height="auto" alt="" style={{borderRadius: '6px'}} />
    },
    {
        title: 'Undergraduate Education, is it Enough?',
        time: 'Monday, February 15, 2021',
        image: <img src={uon2} width="100%" height="auto" alt="" style={{borderRadius: '6px'}} />
    },
    {
        title: 'VIRTUAL OPEN DAY 2021',
        time: 'Wednesday, February 24, 2021',
        image: <img src={uon1} width="100%" height="auto" alt="" style={{borderRadius: '6px'}} />
    },
    {
        title: 'Graduate Education and What Lies Ahead',
        time: 'Wednesday, February 24, 2021',
        image: <img src={uon3} width="100%" height="auto" alt="" style={{borderRadius: '6px'}} />
    },
]

function CenterDetail(props) {
    const { onCenterDetailFetch, centerFromReg } = props;

    useEffect(() => {
        if (!centerFromReg){
            onCenterDetailFetch()
        }
    }, [onCenterDetailFetch, centerFromReg]);

    let center = [];
    if (props.centerFromReg){
        center = props.centerFromReg
    } else {
        center = props.centerFromFetch
    }
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className="container">
                    <Messaging />
                    <div className="company-detail-wrapper">
                        {center && 
                            <div className="profile">
                                <div className="top">
                                    <div className="bg-image">
                                        <img alt='' src={center.backgroundImage} height='auto' width='100%' />
                                    </div>
                                    <div className="top-bottom-block">
                                        <div className="small-image-block">
                                            <div className="image">
                                                <div className="logo">
                                                    <img alt='' src={center.logo} height='100px' />
                                                </div>
                                            </div>
                                            <div className="name">
                                                <div className="title">
                                                    {center.name}
                                                </div>
                                                <div className="subtitle">
                                                    <span><Marker height={15} /></span>
                                                    {center.location}
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
                                    <div className="about" style={{height: '400px'}}>
                                        <div className="title">
                                            About <span>Us</span>
                                        </div>
                                        <div className="content" dangerouslySetInnerHTML={{__html: center.description}}>
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
                                                    <div className="time" style={{height: '20px', width: '100%', marginTop: '3px', fontSize: '0.6rem', color: 'grey'}}>
                                                        Wednesday, February 24, 2021 - 4:45pm
                                                    </div>
                                                    <div className="title" style={{height: '35px', width: '100%', fontSize: '1rem', lineHeight: '18px'}}>
                                                        AFRICAN SYMPOSIUM ON HIGHER EDUCATION
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item" style={{height: '70px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px'}}>
                                                <div className="image" style={{height: '70px', width: '100%', backgroundColor: 'indigo', borderRadius: '10px'}}>

                                                </div>
                                                <div className="cont">
                                                    <div className="time" style={{height: '20px', width: '100%', marginTop: '3px', fontSize: '0.6rem', color: 'grey'}}>
                                                        Thursday, February 18, 2021 - 8:00am
                                                    </div>
                                                    <div className="title" style={{height: '35px', width: '100%', fontSize: '1rem', lineHeight: '18px'}}>
                                                        UoN Open Day 2021
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
                                        <div className="main">
                                            <div style={{height: '430px', width: '100%'}}>
                                                <div className="image" style={{height: '280px', width: '100%', borderRadius: '10px', overflow: 'hidden'}}>
                                                    <img src={uon4} width="100%" height="auto" alt="" style={{borderRadius: '10px'}} />
                                                </div>
                                                <div className="time" style={{marginTop: '10px', height: '20px', width: '100%', fontSize: '0.8rem', color: 'grey'}}>
                                                    Thursday, February 18, 2021
                                                </div>
                                                <div className="title" style={{marginTop: '10px', height: '40px', width: '100%', fontSize: '1.5rem', fontWeight: 'bold'}}>
                                                    Open, Distance & e-Learning
                                                </div>
                                                <div className="content" style={{marginTop: '10px', height: '60px', width: '100%'}}>
                                                    Self learning materials anywhere anytime with instructor lead lectures with a...
                                                </div>
                                            </div>
                                        </div>
                                        <div className="others">
                                            {news ? news.map((item, i) => {
                                                return (
                                                    <CenterNewsCard 
                                                        title={item.title}
                                                        image={item.image}
                                                        time={item.time}
                                                        key={i}
                                                        />
                                                )
                                            })
                                            : 'no news hehe'}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
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

const mapPropsToState = state => {
    return {
        centerFromReg: state.center.center,
        centerFromFetch: state.center.centerDetail
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCenterDetailFetch: () => dispatch(actions.initCenterDetailFetch())
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(GoogleApiWrapper({apiKey: 'AIzaSyAok6R5nza1EEHCpuPHj8m6sV5HiQGH4o4'})(CenterDetail));
