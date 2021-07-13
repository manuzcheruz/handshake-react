import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { withFormik } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../../Store/actions';

import Button from '../../../Shared/Button/Button'
import Field from '../../../Shared/Field/Field'

import { Briefcase, Cap, School, LoginIcon } from '../../../Assets/icons'
import { LoginSVG, CoWorkers } from '../../../Assets/illustrators'
import './Login.css'
import Aux from '../../../hoc/Aux';

const loginFields = [
    {
        name: 'email',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'name@domain.ac.ke',
        label: 'Your E-mail'
    },
    {
        name: 'password',
        elementName: 'input',
        elementType: 'password',
        placeholder: 'Password',
        label: 'Password'
    },
    {
        name: 'remember',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'keep me logged in'
    }
]

const SignupFields = [
    {
        name: 'userCat',
        elementName: 'select',
        elementType: '',
        placeholder: '',
        label: 'Select your category'
    },
    {
        name: 'email',
        elementName: 'input',
        elementType: 'email',
        placeholder: 'Your e-mail',
        label: 'Your E-mail'
    },
    {
        name: 'password1',
        elementName: 'input',
        elementType: 'password',
        placeholder: 'Password',
        label: 'Password'
    },
    {
        name: 'password2',
        elementName: 'input',
        elementType: 'password',
        placeholder: 'Confirm Password',
        label: 'Confirm Password'
    },
    {
        name: 'terms',
        elementName: 'input',
        elementType: 'checkbox',
        label: 'accept our terms and conditions in order to complete creating your account'
    }
]

function Login(props: any): JSX.Element {
    // the password strength indicator
    const [passWeight1, setPassWeight1] = useState('5px solid #ECF1FA');
    const [passWeight2, setPassWeight2] = useState('5px solid #ECF1FA');
    const [passWeight3, setPassWeight3] = useState('5px solid #ECF1FA');
    const [passWeight4, setPassWeight4] = useState('5px solid #ECF1FA');
    // const [toggleBtn, setToggleBtn] = useState('Submit');

    let fields;
    if (props.login){
        fields = loginFields;
        // setToggleBtn('Log In');
        // setPassWeight('');
    } else if (props.signup){
        fields = SignupFields;
        // setToggleBtn('Sign Up');
    }

    const regextTest1 = /[A-Z]/gm;
    const regextTest2 = /[a-z]/gm;
    const regextTest3 = /[0-9!@#$%^&*()_+\-=\]{};':"\\|,.<>?]*$/gm;

    const handlePasswordChange: (event: any) => void = event => {
        // console.log(event.target.value);
        if (event.target.value.length > 6){
            setPassWeight1('5px solid red');
        } else if (regextTest1.test(event.target.value)){
            setPassWeight2('5px solid red')
        } else if (regextTest2.test(event.target.value)){
            setPassWeight3('5px solid red')
        } else if (regextTest3.test(event.target.value)){
            setPassWeight4('5px solid red')
        }
    }

    console.log(props);

    const onFormSubmit: (event: any) => void = event => {
        event.preventDefault();
        if (props.signup){
            if (props.values.password1 !== props.values.password2){
                alert('Your passwords do not match!')
            } else if (!props.values.terms){
                alert('You have to accept the terms and condtions to proceed!')
            } else {
                const data = {
                    email: props.values.email,
                    password: props.values.password1,
                    returnSecureToken: true
                }
                props.onAuthFormSubmit(data, props.values.userCat, props.signup);
            }
        } else if (props.login){

        }
    }

    // console.log(props);

    return (
        <div className="section">
            <div className="container">
                <div className="login-wrapper">
                    <div className="login">
                        <div className="logo">
                            Fanaka
                        </div>
                        <div className="form-wrapper">
                            <div className="title">
                                {props.login ? 'Log In' : props.signup ? 'Sign Up' : ''}
                            </div>
                            <div className="subtitle">
                                {props.login ? 'Login in with your email and password' : props.signup ? 'Fill in the following fields to get access to Fanaka and secure your dream job.' : ''}
                            </div>
                            <form className="form" onSubmit={event => onFormSubmit(event)}>
                                {fields && fields.map( item => {
                                    return (
                                        <Field
                                            key={item.name}
                                            {...item}
                                            {...props}
                                            signup
                                            value={props.values[item.name]}
                                            onChange={props.handleChange}
                                            onPasswordChange={handlePasswordChange}
                                            />
                                    )
                                })}
                                {props.signup && 
                                    <div className="line">
                                        <div className="line1" style={{borderBottom: `${passWeight1}`}}></div>
                                        <div className="line1" style={{borderBottom: `${passWeight2}`}}></div>
                                        <div className="line1" style={{borderBottom: `${passWeight3}`}}></div>
                                        <div className="line1" style={{borderBottom: `${passWeight4}`}}></div>
                                    </div>
                                }
                                <div className="button">
                                    <Button
                                        name='Log In'
                                        type='submit'
                                        size='1.1rem'
                                        color='white'
                                        width='100%'
                                        height='40px'
                                        bgcolor='#55BC7E'
                                        radius='7px'
                                        border='none'
                                        iconMarginLeft='20px'
                                        // iconMarginTop='5px'
                                        icon={<LoginIcon height={18} color='white' />} />
                                </div>
                            </form>
                        </div>
                        <div className="signup">
                            {props.login ? 
                                <Aux>
                                    Don't have an account yet? <span><Link to="/signup">Sign Up</Link></span>
                                </Aux> 
                            : props.signup ? 
                                <Aux>
                                    Already have an account? 
                                    <Link to="/login">
                                        <span>
                                            Log In
                                        </span>
                                    </Link>
                                </Aux>
                            : ''
                        }
                        </div>
                    </div>
                    {props.login ? 
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
                    : props.signup ?
                        <div className="illustrator">
                            <div className="illustrator-coworker">
                                <CoWorkers height={700} width={700} />
                            </div>
                        </div>
                    : ''
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps: (state: any) => void = state => {
    return {

    }
}

const mapPropsToDispatch: (dispatch: any) => void = dispatch => {
    return {
        onAuthFormSubmit: (data: {}, cat: string, isSignUp: boolean) => dispatch(actions.auth(data, cat, isSignUp))
    }
}

export default connect(mapStateToProps,mapPropsToDispatch)(withFormik({
    mapPropsToValues: () => ({
        userCat: '',
        email: '',
        password1: '',
        password2: '',
        terms: false
    }),
    validationSchema: Yup.object().shape({
        userCat: Yup.string()
            .required('required!'),
        email: Yup.string()
            .required('required!'),
        password1: Yup.string()
            .required('required!')
            .min(4, 'Too Short!'),
        password2: Yup.string()
            .required('required!')
            .min(4, 'Too Short!'),
        terms: Yup.string()
            .required('required!')
    })
})(Login));
