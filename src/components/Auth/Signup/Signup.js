import React from 'react'
import { Link } from 'react-router-dom'
import Field from '../../../Shared/Field/Field'
import Button from '../../../Shared/Button/Button'

import { User } from '../../../Assets/icons'
import { CoWorkers } from '../../../Assets/illustrators'
import '../Login/Login.css'

const fields = [
    {
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Your name',
        label: 'Your name'
    },
    {
        name: 'email',
        elementName: 'input',
        elementType: 'type',
        placeholder: 'Your e-mail',
        label: 'Your e-mail'
    },
    {
        name: 'password',
        elementName: 'input',
        elementType: 'password',
        placeholder: 'Password',
        label: 'Password'
    },
    {
        name: 'terms',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'accept our terms and conditions in order to complete creating your account'
    }
]

function Signup() {
    return (
        <div className="section">
            <div className="container">
                <div className="login-wrapper">
                    <div className="login">
                        <div className="logo">
                            Handshake
                        </div>
                        <div className="form-wrapper">
                            <div className="title">
                                Sign Up
                            </div>
                            <div className="subtitle">
                                Fill in the following fields to get access to Handshake and secure your dream job.
                            </div>
                            <form className="form">
                                {fields.map( item => {
                                    return (
                                        <Field
                                            key={item.name}
                                            {...item}
                                            />
                                    )
                                })}
                                <div className="line">
                                    <div className="line1"></div>
                                    <div className="line1"></div>
                                    <div className="line1"></div>
                                    <div className="line1"></div>
                                </div>
                                <div className="button">
                                    <Button
                                        name='create account'
                                        color='white'
                                        width='100%'
                                        height='40px'
                                        bgcolor='#55BC7E'
                                        radius='7px'
                                        border='none' 
                                        iconMarginLeft='20px'
                                        iconMarginTop='0px'
                                        icon={<User height={20} color='white' />}
                                        />
                                </div>
                            </form>
                        </div>
                        <div className="signup">
                            Already have an account? 
                                <Link to="/login">
                                    <span>
                                        Log In
                                    </span>
                                </Link>
                        </div>
                    </div>
                    <div className="illustrator">
                        <div className="illustrator-coworker">
                            <CoWorkers height={700} width={700} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
