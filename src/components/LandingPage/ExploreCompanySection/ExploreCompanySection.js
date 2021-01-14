import React from 'react'
import { Lock, Star } from '../../../Assets/icons'
import TableCard from './TableCard/TableCard'

import './ExploreCompanySection.css'

function ExploreCompanySection() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
                <div className="company-wrapper">
                    <div className="company-message">
                        <div className="title">
                            <span>1000+</span>
                            world top companies post their jobs here.
                        </div>
                        <div className="content">
                            The fortune 500 companies are all part of our members posting premium jobs to match your high level of skill and talent. 
                            The fortune 500 companies are all part of our members posting premium jobs to match your high level of skill and talent.
                        </div>
                        <div className="button">
                            <button className="button-add-acc" type="button">
                                Create free Account
                            </button>
                        </div>
                    </div>
                    <div className="company-display">
                        <div className="security">
                            <div className="icon-lock">
                                <span>
                                    <Lock height={20} color="white" />
                                </span>
                            </div>
                            <div className="text">
                                <div className="title">
                                    We Have <span>Strong</span> Security
                                </div>
                                <div className="subtitle">
                                    Never be confused about your security
                                </div>
                            </div>
                        </div>
                        <div className="company-profile">
                            <div className="image">

                            </div>
                            <div className="name">
                                <div className="name-title">
                                    Madhu Mia
                                </div>
                                <div className="role">
                                    Top job Poster
                                </div>
                            </div>
                            <div className="rating">
                                <div className="rate">
                                    5.00
                                    <span><Star height={8} color="orange" /></span>
                                    <span><Star height={8} color="orange" /></span>
                                    <span><Star height={8} color="orange" /></span>
                                    <span><Star height={8} color="orange" /></span>
                                    <span><Star height={8} color="orange" /></span>
                                </div>
                                <div className="date">
                                    18 July 2020
                                </div>
                            </div>
                        </div>
                        <div className="table">
                            <div className="table-head">
                                <div className="item">
                                    <span>
                                        Company                                    
                                    </span>
                                </div>
                                <div className="item">
                                    <span>
                                        By                                      
                                    </span>
                                </div>
                                <div className="item">
                                    <span>
                                        Salary                                      
                                    </span>
                                </div>
                                <div className="item">
                                    <span>
                                        Post                                      
                                    </span>
                                </div>
                                <div className="item">
                                    <span>
                                        Position                                      
                                    </span>
                                </div>
                            </div>
                            <div className="table-content">
                                <TableCard />
                                <TableCard />
                                <TableCard />
                                <TableCard />
                                <TableCard />
                                <TableCard />
                                <TableCard />
                            </div>
                        </div>
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCompanySection
