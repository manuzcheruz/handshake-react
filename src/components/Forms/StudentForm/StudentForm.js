import React, { useState } from 'react'
import { Cap, Student } from '../../../Assets/illustrators'
import Aux from '../../../hoc/Aux'
import Navbar from '../../Navbar/Navbar'
import Button from '../../../Shared/Button/Button'
import Fade from 'react-reveal/Fade';

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
    const [backBtnShow, setBackBtnShow] = useState('none');
    const [fadeDirection, setFadeDirection] = useState('start');
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
                                                            {...item} />
                                                    </Fade>
                                                    : fadeDirection === 'left' ?
                                                    <Fade left key={item.name}>
                                                        <Field
                                                            {...item} />
                                                    </Fade>
                                                    :
                                                    <Fade key={item.name}>
                                                        <Field
                                                            {...item} />
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
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default StudentForm
