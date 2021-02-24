import React, { useState } from 'react'
import { Cap, Student } from '../../../Assets/illustrators'
import Aux from '../../../hoc/Aux'
import Navbar from '../../Navbar/Navbar'
import Button from '../../../Shared/Button/Button'

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
    const onBtnClick = () => {
        alert('clicked');
        if (formNum < 2 ){
            setFormNum(formNum++);
        } else {
            setBtnText('Submit');
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
                        {/* <span className="edit" style={{marginLeft: '400px', marginTop: '-20px'}}>
                            <Edit height={20} color='grey' />
                        </span> */}
                        <div className="inputs">
                            {fields.map((item, i) => {
                                let displayItem;
                                if (item.displayNum === formNum){
                                    displayItem = <Field
                                                    key={item.name}
                                                    {...item} />
                                }
                                return displayItem;
                            })}
                        </div>
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
