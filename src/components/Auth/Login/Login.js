import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../Shared/Button/Button'
import Field from '../../../Shared/Field/Field'

import { Briefcase, Cap, School, LoginIcon } from '../../../Assets/icons'
import { LoginSVG } from '../../../Assets/illustrators'
import './Login.css'

const fields = [
    {
        name: 'email',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'name@email.ac.ke',
        label: 'Your e-mail'
    },
    {
        name: 'password',
        elementName: 'input',
        elementType: 'password',
        placeholder: 'Password',
        label: 'Password'
    }
]

function Login() {
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
                                Log In
                            </div>
                            <div className="subtitle">
                                Login in with your email and password 
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
                                <div className="button">
                                    <Button
                                        name='Log In'
                                        color='white'
                                        width='100%'
                                        height='40px'
                                        bgcolor='#55BC7E'
                                        radius='7px'
                                        border='none'
                                        iconMarginLeft='20px'
                                        iconMarginTop='0px'
                                        icon={<LoginIcon height={20} color='white' />} />
                                </div>
                            </form>
                        </div>
                        <div className="signup">
                            Don't have an account yet? <span><Link to="/signup">Sign Up</Link></span>
                        </div>
                    </div>
                    <div className="illustrator">
                        <div className="student-card">
                            <div className="icon-cap">
                                <Cap height={30} color='orange' />
                            </div>
                            <div className="text">
                                <div className="title">
                                    Students
                                </div>
                                <div className="subtitle">
                                    Launch the next stage of your career
                                </div>
                            </div>
                        </div>
                        <div className="employer-card">
                            <div className="icon-briefcase">
                                <Briefcase height={30} color='grey' />
                            </div>
                            <div className="text">
                                <div className="title">
                                    Employers
                                </div>
                                <div className="subtitle">
                                    Hire the next generation of talent.
                                </div>
                            </div>
                        </div>
                        <div className="center-card">
                            <div className="icon-school">
                                <School height={30} color="green" />
                            </div>
                            <div className="text">
                                <div className="title">
                                    Career Centers
                                </div>
                                <div className="subtitle">
                                    Bring the best jobs to your students.
                                </div>
                            </div>
                        </div>
                        <div className="illustrator-coworker">
                            <LoginSVG height={700} width={700} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
