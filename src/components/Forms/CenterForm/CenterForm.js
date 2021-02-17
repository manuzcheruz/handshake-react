import React from 'react'
import { BookLover, Teacher } from '../../../Assets/illustrators'
import Aux from '../../../hoc/Aux'
import Navbar from '../../Navbar/Navbar'
import Button from '../../../Shared/Button/Button'

import '../StudentForm/StudentForm.css'
import Field from '../../../Shared/Field/Field'

const fields = [
    {
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g John Doe',
        label: 'Full Name'
    },
    {
        name: 'Course',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Bsc. Geomatic Engineering',
        label: 'Course'
    }
]
function StudentForm(props) {
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className='container-student-form'>
                    <div className="bottom-student-form">
                        <div className="student">
                            <Teacher height={500} />
                        </div>
                        <div className="cap" style={{marginLeft: '455px', marginTop: '200px'}}>
                            <BookLover height={150} />
                        </div>
                    </div>
                    <div className="top-student-form">
                        <div className="title">
                            Center Registration
                        </div>
                        <div className='sub-title'>
                            Tell us abit about your campus so students and employers can easily interract with you
                        </div>
                        <div className="image-top">
                        </div>
                        {/* <span className="edit" style={{marginLeft: '400px', marginTop: '-20px'}}>
                            <Edit height={20} color='grey' />
                        </span> */}
                        <div className="inputs">
                            {fields.map((item, i) => {
                                return (
                                    <Field
                                        key={item.name}
                                        {...item} />
                                )
                            })}
                        </div>
                        <div className="btn">
                            <Button
                                name="Next"
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
