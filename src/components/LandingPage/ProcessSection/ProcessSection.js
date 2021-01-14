import React from 'react'
import Fade from 'react-reveal/Fade'

import { Account, ArrowRight, Plug, Search, Upload } from '../../../Assets/icons'
import './ProcessSection.css'

function ProcessSection() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
                <Fade left>
                    <div className="process-wrapper" style={{height: '400px'}}>
                        <div className="process-items" style={{marginTop: '80px'}}>
                            <div className="process-item">
                                <div className="process-acc">
                                    <div className="acc-block" style={{width: '150px'}}>
                                        <div className="rotated" style={{backgroundColor: '#ECF1FA', marginLeft: '25px', height: '100px', width: '100px', borderRadius: '25px', transform: 'rotate(45deg)'}}>
                                            <div className="icon-acc" style={{marginLeft: '25px', paddingTop: '15px', transform: 'rotate(-45deg)'}}>
                                                <Account height={30} />
                                            </div>
                                        </div>
                                        <div className="item-bottom" style={{textAlign: 'center'}}>
                                            <h4>
                                                Account
                                            </h4>
                                            <p style={{fontSize: '0.8rem', color: 'grey'}}>
                                                First you have to create an Account in here
                                            </p>
                                        </div>
                                    </div>
                                    <div className="acc-arrow">
                                        <div className="icon-arrow" style={{marginTop: '25px'}}>
                                            <ArrowRight color='#55BC7E' height={40} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="process-item">
                                <div className="process-resume">
                                    <div className="acc-block" style={{width: '150px'}}>
                                        <div className="rotated" style={{backgroundColor: '#ECF1FA', marginLeft: '25px', height: '100px', width: '100px', borderRadius: '25px', transform: 'rotate(45deg)'}}>
                                            <div className="icon-acc" style={{marginLeft: '25px', paddingTop: '15px', transform: 'rotate(-45deg)'}}>
                                                <Upload height={30} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="acc-arrow">
                                        <div className="icon-arrow" style={{marginTop: '25px'}}>
                                            <ArrowRight color='#55BC7E' height={40} />
                                        </div>
                                    </div>
                                    <div className="item-bottom" style={{textAlign: 'center'}}>
                                        <h4>
                                            CV/Resume
                                        </h4>
                                        <p style={{fontSize: '0.8rem', color: 'grey'}}>
                                            For a job you have to upload your best CV or Resume
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="process-item">
                                <div className="process-search">
                                    <div className="acc-block" style={{width: '150px'}}>
                                        <div className="rotated" style={{backgroundColor: '#ECF1FA', marginLeft: '25px', height: '100px', width: '100px', borderRadius: '25px', transform: 'rotate(45deg)'}}>
                                            <div className="icon-acc" style={{marginLeft: '25px', paddingTop: '15px', transform: 'rotate(-45deg)'}}>
                                                <Search color='#55BC7E' height={30} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="acc-arrow">
                                        <div className="icon-arrow" style={{marginTop: '25px'}}>
                                            <ArrowRight color='#55BC7E' height={40} />
                                        </div>
                                    </div>
                                    <div className="item-bottom" style={{textAlign: 'center'}}>
                                        <h4>
                                            Quick Jobs
                                        </h4>
                                        <p style={{fontSize: '0.8rem', color: 'grey'}}>
                                            Find your best jobs by using search or categories.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="process-apply">
                                <div className="apply-block" style={{width: '150px'}}>
                                    <div className="rotated" style={{backgroundColor: '#ECF1FA', marginLeft: '20px', height: '100px', width: '100px', borderRadius: '25px', transform: 'rotate(45deg)'}}>
                                        <div className="icon-acc" style={{marginLeft: '25px', paddingTop: '15px', transform: 'rotate(-45deg)'}}>
                                            <Plug height={30} />
                                        </div>
                                    </div>
                                </div>
                                <div className="item-bottom" style={{textAlign: 'center', marginLeft: '-25px', marginTop: '30px', width: '200px'}}>
                                        <h4>
                                            Apply them
                                        </h4>
                                        <p style={{fontSize: '0.8rem', color: 'grey'}}>
                                            Finally you apply your job and enjoy your work.
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default ProcessSection
