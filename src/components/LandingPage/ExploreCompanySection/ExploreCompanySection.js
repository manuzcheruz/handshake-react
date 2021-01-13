import React from 'react'

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

                        </div>
                        <div className="company-profile">

                        </div>
                        <div className="table">

                        </div>
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreCompanySection
