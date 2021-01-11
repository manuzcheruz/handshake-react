import React from 'react'

import './IntroSection.css'
import handshake from '../../../Assets/Images/handshake2.png'

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
                            <input type="text" placeholder="Job title keywords" />
                            <span role="button">
                                search
                            </span>
                        </div>
                        <div className="trust">
                            <h5 className="">
                                We are Trusted by:
                            </h5>
                            <div className="icons">

                            </div>
                        </div>
                    </div>
                    <div className="image">
                        <div className="mail">
                        </div>
                        <div className="pdf">
                        </div>
                        <div className="upload"></div>
                        <div className="job-holder">
                        </div>
                        <div className="mini"></div>
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
