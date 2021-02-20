import React from 'react'
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade'
import { Lock, Star, Google, Microsoft, Tesla, Amazon, Apple, Benz } from '../../../Assets/icons'
import TableCard from './TableCard/TableCard'
import { me } from '../../../Assets/Images'

import './ExploreCompanySection.css'
import { Link } from 'react-router-dom';

const companyTable = [
    {
        role: 'Software Engineer',
        name: 'Google',
        image: <Google height={15} />,
        salary: '$7,000',
        time: '2 hrs ago'
    },
    {
        role: 'UI/UX Designer',
        name: 'Microsoft',
        image: <Microsoft height={15} />,
        salary: '$8,000',
        time: '4 hrs ago'
    },
    {
        role: 'Software Engineer',
        name: 'Apple',
        image: <Apple height={15} />,
        salary: '$7,000',
        time: '2 hrs ago'
    },
    {
        role: 'Javascript Engineer',
        name: 'Amazon',
        image: <Amazon height={15} />,
        salary: '$10,000',
        time: '1 hr ago'
    },
    {
        role: 'Fullstack Engineer',
        name: 'Tesla',
        image: <Tesla height={15} />,
        salary: '$7,000',
        time: '2 hrs ago'
    },
    {
        role: 'Software Engineer',
        name: 'Lamborghini',
        image: <Benz height={15} />,
        salary: '$7,000',
        time: '2 hrs ago'
    },
    {
        role: 'Software Engineer',
        name: 'Google',
        image: <Google height={15} />,
        salary: '$7,000',
        time: '2 hrs ago'
    }
]

function ExploreCompanySection() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
                <Pulse>
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
                                <Link to='/company-registration'>
                                    <button className="button-add-acc" type="button">
                                        Create free Account
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="company-display">
                            <Fade left>
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
                            </Fade>
                            <Fade left>
                                <div className="company-profile">
                                    <div className="image">
                                        <img alt='' src={me} height='50' />
                                    </div>
                                    <div className="name">
                                        <div className="name-title">
                                            John Doe
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
                            </Fade>
                            <Fade right>
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
                                        {companyTable.map((item, i) => {
                                            return (
                                                <TableCard key={i} {...item} />
                                            )
                                        })}
                                    </div>
                                </div>
                            </Fade>
                            <div className="circle"></div>
                        </div>
                    </div>

                </Pulse>
            </div>
        </div>
    )
}

export default ExploreCompanySection
