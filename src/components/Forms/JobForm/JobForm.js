import React from 'react'
import { JobHunt, JobOffer } from '../../../Assets/illustrators'
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
        placeholder: 'e.g Software Engineer',
        label: 'Job Title'
    },
    {
        name: 'location',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Nairobi, Kenya',
        label: 'Location'
    },
    {
        name: 'slots',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g 25 slots available',
        label: 'Slots'
    }
]

// const fields2 = [
//     {
//         name: 'description',
//         elementName: 'editor',
//         elementType: 'editor',
//         placeholder: 'Describe your job listing here',
//         label: 'Description'
//     }
// ]
function StudentForm(props) {
    // const [show, setShow] = useState('block')

    // const onClickBtn = () => {
    //     setShow('');
    // }
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
                                        {...item} />
                                )
                            })}
                        </div>
                        {/* <div className="inputs2" style={{display: `${show ? 'none' : 'block'}`}}>
                            {fields2.map((item, i) => {
                                return (
                                    <Field
                                        key={item.name}
                                        {...item} />
                                )
                            })}
                        </div> */}
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
                                // createMessage={onClickBtn} 
                                    />
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default StudentForm
