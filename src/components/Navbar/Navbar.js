import React from 'react'
import { Link } from 'react-router-dom'

import { Account, Logout, User } from '../../Assets/icons'
import Aux from '../../hoc/Aux'
import './Navbar.css'

function Navbar(props) {
    return (
        <div className="section" style={{backgroundColor: `${props.bgColor && props.bgColor }`}}>
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="name">
                        <h2>
                            Fanaka
                        </h2>
                    </div>
                    <div className="links-wrapper">
                        <button className="">
                            Home
                        </button>
                        {props.core ?
                        <Link to="/jobs" >
                            <button className="">
                                Jobs
                            </button>
                        </Link>
                        :
                        <Link to='' >
                            <button className="">
                                Categories
                            </button>
                        </Link>}
                        {props.core ?
                        <Link to="/students" >
                            <button className="">
                                Students
                            </button>
                        </Link>
                        :
                        <Link to='' >
                            <button className="">
                                About Us
                            </button>
                        </Link>}
                        {props.core ?
                        <Link to="/companies" >
                            <button className="">
                                Companies
                            </button>
                        </Link>
                        :
                        <Link to='' >
                            <button className="">
                                Contact
                            </button>
                        </Link>}
                        {props.core && 
                        <Link to='/centers'>
                            <button className="">
                                Centers
                            </button>
                        </Link>
                        }
                    </div>
                    <div className="account-wrapper">
                        {props.core ? 
                            <Aux>
                                <Link to='/companies/company' >
                                    <button className="">
                                        <span style={{marginRight: '15px'}}><Account height={20} /></span>
                                        Manuz
                                    </button>
                                </Link>
                                <Link to="/logout" >
                                    <button style={{width: '150px', backgroundColor: 'none'}} className="create-acc1">
                                        logout
                                        <span style={{marginLeft: '15px'}}><Logout height={20} /></span>
                                    </button>
                                </Link>
                            </Aux>
                            :
                            <Aux>
                                <Link to='/login' >
                                    <button className="">
                                        account
                                    </button>
                                </Link>
                                <Link to="/signup" >
                                    <button className="create-acc">
                                        <span><User height={20} /></span>
                                        create account
                                    </button>
                                </Link>
                            </Aux>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
