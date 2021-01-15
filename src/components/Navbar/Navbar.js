import React from 'react'
import { Link } from 'react-router-dom'

import { User } from '../../Assets/icons'
import './Navbar.css'

function Navbar() {
    return (
        <div className="section">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="name">
                        <h2>
                            handshake
                        </h2>
                    </div>
                    <div className="links-wrapper">
                        <button className="">
                            Home
                        </button>
                        <button className="">
                            Categories
                        </button>
                        <button className="">
                            About Us
                        </button>
                        <button className="">
                            contact
                        </button>
                    </div>
                    <div className="account-wrapper">
                        <button className="">
                            my account
                        </button>
                            <Link to="/signup" >
                                <button className="create-acc">
                                    <span><User height={20} /></span>
                                    create account
                                </button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
