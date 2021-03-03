import React from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import { JobHunt, JobOffer } from '../../../Assets/illustrators'
import Aux from '../../../hoc/Aux'
import Navbar from '../../Navbar/Navbar'
import Button from '../../../Shared/Button/Button'

import '../StudentForm/StudentForm.css'
import Field from '../../../Shared/Field/Field'

const fields = [
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
        elementType: '',
        placeholder: 'Describe your job listing here',
        label: 'Description',
        level: 1
    },
    {
        name: 'company',
        elementName: 'input',
        elementType: '',
        placeholder: 'e.g Apple',
        label: 'Company',
        level: 0
    },
    {
        name: 'category',
        elementName: 'input',
        elementType: '',
        placeholder: '',
        label: 'Category',
        level: 0
    },
    {
        name: 'salary',
        elementName: 'input',
        elementType: '',
        placeholder: 'e.g $200/month',
        label: 'Salary',
        level: 2
    },
    {
        name: 'type',
        elementName: 'input',
        elementType: '',
        placeholder: '',
        label: 'Employment type',
        level: 2
    },
    {
        name: 'experience',
        elementName: 'input',
        elementType: '',
        placeholder: '',
        label: 'Experience',
        level: 2
    },
    {
        name: 'level',
        elementName: 'input',
        elementType: '',
        placeholder: '',
        label: 'Work Level',
        level: 2
    },
]
function StudentForm(props) {
    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className='container-student-form'>
                    <div className="bottom-student-form">
                        <div className="student">
                            <JobOffer height={500} />
                        </div>
                        <div className="cap" style={{marginLeft: '455px', marginTop: '200px'}}>
                            <JobHunt height={150} />
                        </div>
                    </div>
                    <div className="top-student-form">
                        <div className="title">
                            Job Registration
                        </div>
                        <div className='sub-title'>
                            Describe the job listing below so it can be easy to match it with the right candidates, you want that right?
                        </div>
                        {/* <div className="image-top">
                        </div> */}
                        {/* <span className="edit" style={{marginLeft: '400px', marginTop: '-20px'}}>
                            <Edit height={20} color='grey' />
                        </span> */}
                        <div className="inputs">
                            {fields.map((item, i) => {

                                return (
                                    <Field
                                        key={item.name}
                                        {...item}
                                        {...props}
                                        value={props.values[item.name]}
                                        onChange={props.onChange} />
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
                                height='40px'
                                // click={onBtnClick} 
                                    />
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default withFormik({
    mapPropsToValues: () => ({
        title: '',
        location: '',
        slots: null,
        description: '',
        company: '',
        category: '',
        salary: '',
        type: '',
        level: '',
        experience: ''
    }),
    validationSchema: Yup.object().shape({
        title: Yup.string(),
        location: Yup.string(),
        slots: Yup.string(),
        description: Yup.string(),
        company: Yup.string(),
        logo: Yup.string(),
        backgroundImage: Yup.string(),
        twitter: Yup.string(),
        category: Yup.string()
    })
})(StudentForm);
