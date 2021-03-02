import React, { useState } from 'react'
import { Cap, Student } from '../../../Assets/illustrators'
import Aux from '../../../hoc/Aux'
import Navbar from '../../Navbar/Navbar'
import Button from '../../../Shared/Button/Button'
import Fade from 'react-reveal/Fade';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import './StudentForm.css'
import Field from '../../../Shared/Field/Field'

const fields = [
    {
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g John Doe',
        label: 'Full Name',
        displayNum: 0
    },
    {
        name: 'campus',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g University of Nairobi',
        label: 'Campus',
        displayNum: 0
    },
    {
        name: 'course',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Bsc. Geomatic Engineering',
        label: 'Course',
        displayNum: 0
    },
    {
        name: 'description',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'describe yourself in 1000 characters or less',
        label: 'Description',
        displayNum: 1
    },
    {
        name: 'twitter',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g @johndoe',
        label: 'Course',
        displayNum: 1
    }
]
function StudentForm(props) {
    let [formNum, setFormNum] = useState(0);
    const [btnText, setBtnText] = useState('Next');
    const [btnType, setBtnType] = useState('button');
    const [backBtnShow, setBackBtnShow] = useState('none');
    const [fadeDirection, setFadeDirection] = useState('start');

    // submit the form and send a copy of it to redux store so as to be accessed in the student detail without server request
    const onFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            name: props.values.name,
            campus: props.values.campus,
            course: props.values.course,
            description: props.values.description,
            twitter: props.values.twitter
        }
        if (props.values.description !== ''){
            // grab the values of the fields in the props, make a request to express js to save it in the db
            fetch('/student/create', {
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
        if (newFormNum <= 1 ){
            setFormNum(newFormNum);
            setBackBtnShow('block');
        } 
        if (newFormNum === 1){
            setBtnText('Submit');
            setBtnType('submit');
        }
    } 
    // back btn
    const onBackBtnClick = () => {
        setFadeDirection('left');
        const newFormNum = --formNum;
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
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className='container-student-form'>
                    <div className="bottom-student-form">
                        <div className="student">
                            <Student height={500} />
                        </div>
                        <div className="cap" style={{marginLeft: '455px', marginTop: '200px'}}>
                            <Cap height={150} />
                        </div>
                    </div>
                    <div className="top-student-form">
                        <form onSubmit={event => onFormSubmit(event)}>
                            <div className="title">
                                Student Registration
                            </div>
                            <div className='sub-title'>
                                Tell us abit about yourself so we can easily match you with the best jobs and everything really
                            </div>
                            <div className="image-top">
                            </div>
                            <div className="inputs">
                                {fields.map((item, i) => {
                                    let displayItem;
                                    if (item.displayNum === formNum){
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
})(StudentForm);
