import React, { useState } from 'react'
import { Cap, Student, Teacher, Deal, JobOffer, JobHunt, Hiring, BookLover } from '../../../Assets/illustrators'
import Aux from '../../../hoc/Aux'
import Navbar from '../../Navbar/Navbar'
import Button from '../../../Shared/Button/Button'
import Fade from 'react-reveal/Fade';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import './StudentForm.css'
import Field from '../../../Shared/Field/Field'

const studentFields = [
    {
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g John Doe',
        label: 'Full Name',
        level: 0
    },
    {
        name: 'campus',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g University of Nairobi',
        label: 'Campus',
        level: 0
    },
    {
        name: 'course',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Bsc. Geomatic Engineering',
        label: 'Course',
        level: 0
    },
    {
        name: 'description',
        elementName: 'editor',
        elementType: 'text',
        placeholder: 'describe yourself in 1000 characters or less',
        label: 'Description',
        level: 1
    },
    {
        name: 'twitter',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g @johndoe',
        label: 'Twitter',
        level: 1
    }
]

const jobFields = [
    {
        name: 'title',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Software Engineer',
        label: 'Job Title',
        level: 0
    },
    {
        name: 'location',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Nairobi, Kenya',
        label: 'Location',
        level: 0
    },
    {
        name: 'slots',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g 25 slots available',
        label: 'Slots',
        level: 1
    },
    {
        name: 'description',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Describe your job listing here',
        label: 'Description',
        level: 1
    },
    {
        name: 'company',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Apple',
        label: 'Company',
        level: 0
    },
    {
        name: 'category',
        elementName: 'input',
        elementType: 'text',
        placeholder: '',
        label: 'Category',
        level: 0
    },
    {
        name: 'salary',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g $200/month',
        label: 'Salary',
        level: 2
    },
    {
        name: 'type',
        elementName: 'input',
        elementType: 'text',
        placeholder: '',
        label: 'Employment type',
        level: 2
    },
    {
        name: 'experience',
        elementName: 'input',
        elementType: 'text',
        placeholder: '',
        label: 'Experience',
        level: 2
    },
    {
        name: 'level',
        elementName: 'input',
        elementType: 'text',
        placeholder: '',
        label: 'Work Level',
        level: 2
    },
]

const centerFields = [
    {
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Univeristy of Nairobi',
        label: 'Campus Name',
        level: 0
    },
    {
        name: 'logo',
        elementName: 'input',
        elementType: 'file',
        placeholder: '',
        label: 'Campus Logo',
        level: 0
    },
    {
        name: 'backgroundImage',
        elementName: 'input',
        elementType: 'file',
        placeholder: '',
        label: 'Background Image',
        level: 0
    },
    {
        name: 'location',
        elementName: 'input',
        elementType: 'text',
        placeholder: '',
        label: 'Location',
        level: 0
    },
    {
        name: 'description',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Describe your campus here',
        label: 'Description',
        level: 1
    },
    {
        name: 'twitter',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g @uon',
        label: 'Twitter',
        level: 1
    }
]

const companyFields = [
    {
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Apple Inc.',
        label: 'Company Name',
        level: 0
    },
    {
        name: 'logo',
        elementName: 'input',
        elementType: 'file',
        placeholder: '',
        label: 'Company Logo',
        level: 0
    },
    {
        name: 'backgroundImage',
        elementName: 'input',
        elementType: 'file',
        placeholder: '',
        label: 'Background Image',
        level: 0
    },
    {
        name: 'location',
        elementName: 'input',
        elementType: 'text',
        placeholder: '',
        label: 'Location',
        level: 0
    },
    {
        name: 'description',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Describe your company here',
        label: 'Description',
        level: 1
    },
    {
        name: 'twitter',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g @apple',
        label: 'Twitter',
        level: 1
    }
]
function RegistrationForm(props) {
    // first assign the fields to the right form first
    let fields;
    if (props.job){
        fields = jobFields;
    } else if (props.student){
        fields = studentFields;
    } else if (props.center){
        fields = centerFields;
    } else if (props.company){
        fields = companyFields
    }

    let [formNum, setFormNum] = useState(0);
    const [btnText, setBtnText] = useState('Next');
    const [btnType, setBtnType] = useState('button');
    const [backBtnShow, setBackBtnShow] = useState('none');
    const [fadeDirection, setFadeDirection] = useState('start');

    // submit the form and send a copy of it to redux store so as to be accessed in the student detail without server request
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (props.values.description !== ''){
            let url;
            let data;
            if (props.job){
                url = '/job/create';
            } else if (props.student){
                url = 'student/create';
                data = {
                    name: props.values.name,
                    campus: props.values.campus,
                    course: props.values.course,
                    description: props.values.description,
                    twitter: props.values.twitter
                }
            } else if (props.center){
                url = 'center/create';
            } else if (props.company){
                url = 'company/create';
            }
            // grab the values of the fields in the props, make a request to express js to save it in the db
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                return res.json();
            })
            .then(response => {
                console.log(response);
            })
            .catch(() => console.log("unable to save the data to the db"));
        }
    }
    // next btn click
    const onBtnClick = () => {
        setFadeDirection('right');
        const newFormNum = ++formNum;
        if (props.job){
            if (newFormNum <= 2 ){
                setFormNum(newFormNum);
                setBackBtnShow('block');
            } 
            if (newFormNum === 2){
                setBtnText('Submit');
                setBtnType('submit');
            }
        } else if (props.student || props.center || props.company){
            if (newFormNum <= 1 ){
                setFormNum(newFormNum);
                setBackBtnShow('block');
            } 
            if (newFormNum === 1){
                setBtnText('Submit');
                setBtnType('submit');
            }
        }
    } 
    // back btn
    const onBackBtnClick = () => {
        setFadeDirection('left');
        const newFormNum = --formNum;
        if (props.job){
            if (newFormNum <= 2 ){
                setFormNum(newFormNum);
            } 
            if (newFormNum === 0){
                setBackBtnShow('none');
                setBtnText('Next');
            } else if (newFormNum < 2){
                setBtnText('Next');
            }
        } else if (props.student || props.center || props.company){
            if (newFormNum <= 1 ){
                setFormNum(newFormNum);
            } 
            if (newFormNum === 0){
                setBackBtnShow('none');
                setBtnText('Next');
            } else if (newFormNum < 1){
                setBtnText('Next');
            }
        }
    }
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className='container-student-form'>
                    <div className="bottom-student-form">
                        <Fade left>
                            <div className="student">
                                {props.job ? 
                                    <JobOffer height={500} /> :
                                    props.student ? 
                                    <Student height={500} /> :
                                    props.center ?
                                    <Teacher height={500} /> :
                                    <Deal height={500} />
                                }
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="cap" style={{marginLeft: '455px', marginTop: '200px'}}>
                                {props.job ? 
                                    <JobHunt height={150} /> :
                                    props.student ? 
                                    <Cap height={150} /> :
                                    props.center ?
                                    <BookLover height={150} /> :
                                    <Hiring height={150} />
                                }
                            </div>
                        </Fade>
                    </div>
                    <Fade>
                        <div className="top-student-form">
                            <form onSubmit={event => onFormSubmit(event)}>
                                <div className="title">
                                    {props.job ? 'Job Registration' : props.student ? 'Student Registration' : props.center ? 'Center Registration' : 'Company Registration'}
                                </div>
                                <div className='sub-title'>
                                    {props.job ? 
                                    'Describe the job listing below so it can be easy to match it with the right candidates, you want that right?' :
                                    props.student ?
                                    'Tell us abit about yourself so we can easily match you with the best jobs and everything really' :
                                    props.center ?
                                    'Tell us abit about your campus so students and employers can easily interract with you':
                                    'Tell us abit about your company so we can easily match you with the best students and everything really'
                                    }
                                </div>
                                {/* {!props.job 
                                    && 
                                    <div className="image-top">
                                    </div>
                                } */}
                                <div className="inputs">
                                    {/* <div className="input-wrapper" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '20px'}}>
                                        <div style={{width: '200px'}}>

                                        </div>

                                    </div> */}
                                    {fields.map((item, i) => {
                                        let displayItem;
                                        if (item.level === formNum){
                                            displayItem = {...fadeDirection === 'right' ?
                                                            <Fade right key={item.name}>
                                                                <Field
                                                                    {...item}
                                                                    {...props}
                                                                    value={props.values[item.name]}
                                                                    onChange={props.handleChange} />
                                                            </Fade>
                                                            : fadeDirection === 'left' ?
                                                            <Fade left key={item.name}>
                                                                <Field
                                                                    {...item}
                                                                    {...props}
                                                                    value={props.values[item.name]}
                                                                    onChange={props.handleChange} />
                                                            </Fade>
                                                            :
                                                            <Fade key={item.name}>
                                                                <Field
                                                                    {...item}
                                                                    {...props}
                                                                    value={props.values[item.name]}
                                                                    onChange={props.handleChange} />
                                                            </Fade>
                                                            }
                                        }
                                        return displayItem;
                                    })}
                                </div>
                                {fadeDirection === 'right' ?
                                    <Fade right>
                                        <div className="btn" style={{display: `${backBtnShow}`}}>
                                            <Button
                                                type="button"
                                                click={onBackBtnClick}
                                                name='Back'
                                                size='1.2rem'
                                                bgcolor='#FF9066'
                                                color='white'
                                                border='none'
                                                width='367px'
                                                radius='5px'
                                                height='40px' />
                                        </div>
                                    </Fade>
                                :
                                <Fade left>
                                    <div className="btn" style={{display: `${backBtnShow}`}}>
                                        <Button
                                            type="button"
                                            click={onBackBtnClick}
                                            name='back'
                                            size='1.2rem'
                                            bgcolor='#55BC7E'
                                            color='white'
                                            border='none'
                                            width='367px'
                                            radius='5px'
                                            height='40px' />
                                    </div>
                                </Fade>
                            }
                                <div className="btn">
                                    <Button
                                        type={btnType}
                                        click={onBtnClick}
                                        name={btnText}
                                        size='1.2rem'
                                        bgcolor='#55BC7E'
                                        color='white'
                                        border='none'
                                        width='367px'
                                        radius='5px'
                                        height='40px' />
                                </div>
                            </form>
                        </div>
                    </Fade>
                </div>
            </div>
        </Aux>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        campus: '',
        course: '',
        description: '',
        twitter: ''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(3, 'name is too short!')
            .max(100, 'name is too long!')
            .required('required!'),
        campus: Yup.string()
            .min(1, 'campus name cannot be empty!')
            .max(200, 'campus name is too long!')
            .required('required!'),
        course: Yup.string()
            .min(1, 'course name cannot be empty!')
            .max(200, 'course name is too long!')
            .required('required!'),
        description: Yup.string()
            .min(1, 'description cannot be empty!')
            .max(1000, 'description is too long!')
            .required('required!'),
        twitter: Yup.string()
    })
})(RegistrationForm);
