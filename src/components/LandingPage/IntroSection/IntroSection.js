import React from 'react'

import './IntroSection.css'
import handshake from '../../../Assets/Images/handshake2.png'
import { Mail, Check, Pdf, Heart, Google, Be, Instagram, Microsoft, Search } from '../../../Assets/icons'

function IntroSection() {
    return (
        <div className="section">
            <div className="container">
                <div className="intro-wrapper">
                    <div className="message">
                        <div className="top">
                            <h5>
                                <span className="btn">NEW</span>
                                Stay connect to Get upcoming job with #GetJob
                            </h5>
                        </div>
                        <h1 className="title">Find your job &</h1>
                        <h1 className="title">make sure goal.</h1>
                        <h4 className="sub-title">Your dream job is waiting for you</h4>

                        <div className="search-input">
                            <div className="main-search">
                                <input type="text" placeholder="Job title keywords" />
                            </div>
                            <div className="select-search">
                                <select>
                                    <option>City or Zip code</option>
                                </select>
                            </div>
                            <span role="button">
                                <div className="icon-search" style={{marginLeft: '16px', marginTop: '10px'}}>
                                    <Search color='white' height={15} />
                                </div>
                            </span>
                        </div>
                        <div className="trust">
                            <h5 className="">
                                We are Trusted by:
                            </h5>
                            <div className="icons">
                                <div className="icon-google" style={{paddingTop: '10px', marginLeft: '10px'}}>
                                    <Google height={20} />
                                </div>
                                <div className="icon-google" style={{paddingTop: '10px', marginLeft: '10px'}}>
                                    <Be height={20} />
                                </div>
                                <div className="icon-google" style={{paddingTop: '10px', marginLeft: '10px'}}>
                                    <Instagram height={20} />
                                </div>
                                <div className="icon-google" style={{paddingTop: '10px', marginLeft: '10px'}}>
                                    <Microsoft height={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <div className="mail">
                            <div className="mail-icon" style={{marginLeft: '12px', marginRight: '10px', marginTop: '10px', padding: '5px', backgroundColor: '#ECF1FA', height: '17px', borderRadius: '5px'}}>
                                <Mail height={18} />
                            </div>
                            <div className="text">
                                <div className="text-title">
                                    Congrats!
                                </div>
                                <div className="text-cont">
                                    You have got an Email
                                </div>
                            </div>
                            <div className="check-icon" style={{marginTop: '10px', marginLeft: '10px'}}>
                                <Check height={25} />
                            </div>
                        </div>
                        <div className="upload">
                            <h6>
                                upload Cv
                            </h6>
                        </div>
                        <div className="pdf">
                            <div className="pdf-icon" style={{marginTop: '13px', marginLeft: '16px'}}>
                                <Pdf height={25} />
                            </div>
                        </div>
                        <div className="job-holder">
                            <h5 className="job-holder-text" style={{marginLeft: '15px'}}>
                                10k+ Jobholder Get job
                            </h5>
                        </div>
                        <div className="heart">
                            <div className="heart-icon" style={{marginTop: '5px', marginLeft: '5px'}}>
                                <Heart height={20} />
                            </div>
                        </div>
                        <div className="mini">
                            <div className="mini-content" style={{marginLeft: '30px', marginRight: '30px'}}>
                                <div style={{padding: '0px', fontSize: '0.8rem', marginTop: '15px'}}>
                                    Hi,
                                </div>
                                <div style={{paddingTop: '0px', fontSize: '0.8rem'}}>
                                    I am looking for a job, could you explain more details?
                                </div>
                                <div style={{textAlign: 'right', fontSize: '0.8rem'}}>
                                    3.52 PM
                                </div>
                            </div>
                        </div>
                        <div className="mini-profile"></div>
                        <div className="thumb">
                            <img width="450px" src={handshake} alt="handshake" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroSection
