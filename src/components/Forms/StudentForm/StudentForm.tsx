import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions';


import { Cap, Student, Teacher, Deal, JobOffer, JobHunt, Hiring, BookLover } from '../../../Assets/illustrators';
import Aux from '../../../hoc/Aux';
import Navbar from '../../Navbar/Navbar';
import Button from '../../../Shared/Button/Button';
import Fade from 'react-reveal/Fade';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import './StudentForm.css';
import Field from '../../../Shared/Field/Field';

interface SingleField {
    name: string;
    elementName: string;
    elementType: string;
    placeholder?: string,
    label: string;
    level: number;
    position?: string;
}

const studentFields: SingleField[] = [
    {
        name: 'logo',
        elementName: 'input',
        elementType: 'file',
        // placeholder: 'e.g John Doe',
        label: 'Profile Image',
        level: 0,
        position: 'left'
    },
    {
        name: 'backgroundImage',
        elementName: 'input',
        elementType: 'file',
        // placeholder: 'e.g John Doe',
        label: 'Background Image',
        level: 0,
        position: 'right'
    },
    {
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g John Doe',
        label: 'Full Name',
        level: 0,
        position: 'left'
    },
    {
        name: 'campus',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g University of Nairobi',
        label: 'Campus',
        level: 0,
        position: 'right'
    },
    {
        name: 'course',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Bsc. Geomatic Engineering',
        label: 'Course',
        level: 0,
        position: 'left'
    },
    {
        name: 'description',
        elementName: 'editor',
        elementType: '',
        placeholder: '',
        label: 'Description',
        level: 1
    },
    {
        name: 'year',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g 5th year',
        label: 'Study Year',
        level: 0,
        position: 'left'
    },
    {
        name: 'resume',
        elementName: 'input',
        elementType: 'file',
        placeholder: '',
        label: 'Resume',
        level: 0,
        position: 'right'
    },
    {
        name: 'twitter',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g @johndoe',
        label: 'Twitter',
        level: 0,
        position: 'right'
    }
]

const jobFields: SingleField[] = [
    {
        name: 'title',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Software Engineer',
        label: 'Job Title',
        level: 0
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
        level: 0
    },
    {
        name: 'shortDescription',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'Briefly describe your job listing',
        label: 'Short Description',
        level: 1
    },
    {
        name: 'category',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g engineering',
        label: 'Category',
        level: 0
    },
    {
        name: 'salary',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g $200/month',
        label: 'Salary',
        level: 0
    },
    {
        name: 'type',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g part time',
        label: 'Employment type',
        level: 0
    },
    {
        name: 'experience',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g 1 year',
        label: 'Experience',
        level: 0
    },
    {
        name: 'level',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g junior',
        label: 'Work Level',
        level: 1
    },
    {
        name: 'description',
        elementName: 'editor',
        elementType: '',
        placeholder: '',
        label: 'Long Description',
        level: 1
    }
]

const centerFields: SingleField[] = [
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
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Univeristy of Nairobi',
        label: 'Campus Name',
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
        name: 'location',
        elementName: 'input',
        elementType: 'text',
        placeholder: '',
        label: 'Location',
        level: 0
    },
    {
        name: 'description',
        elementName: 'editor',
        elementType: '',
        placeholder: '',
        label: 'Description',
        level: 1
    },
    {
        name: 'twitter',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g @uon',
        label: 'Twitter',
        level: 0
    }
]

const companyFields: SingleField[] = [
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
        name: 'name',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Apple Inc.',
        label: 'Company Name',
        level: 0
    },
    {
        name: 'category',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g Agriculture',
        label: 'Category',
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
        name: 'description',
        elementName: 'editor',
        elementType: '',
        placeholder: '',
        label: 'Description',
        level: 1
    },
    {
        name: 'twitter',
        elementName: 'input',
        elementType: 'text',
        placeholder: 'e.g @apple',
        label: 'Twitter',
        level: 0
    }
]

/**
 * interfacing student data sent to the server during registration
 */
export interface StudentData {
    name: string;
    campus: string;
    course: string;
    description: string;
    twitter: string;
    logo: any;
    backgroundImage: any;
    resume: any;
}

/**
 * interfacing center data sent to the server during registration
 */
export interface CenterData {
    name: string;
    category: string;
    course: string;
    description: string;
    twitter: string;
    logo: any;
    backgroundImage: any;
    location: any;
}

/**
 * redifining this but have to reuse one used in the navbar
 */
// export interface PropsRegistration {
//     job?: boolean;
//     student?: boolean;
//     center?: boolean;
//     company?: boolean;
// }

/**
 * This component handles the registration of new users and jobs
 * @param props 
 * @returns 
 */
function RegistrationForm(props: any): JSX.Element {
    // first assign the fields to the right form first
    let fields: SingleField[] = [];
    if (props.job){
        fields = jobFields;
    } else if (props.student){
        fields = studentFields;
    } else if (props.center){
        fields = centerFields;
    } else if (props.company){
        fields = companyFields;
    }

    let [formNum, setFormNum] = useState(0);
    const [btnText, setBtnText] = useState('Next');
    const [btnType, setBtnType] = useState('button');
    const [backBtnShow, setBackBtnShow] = useState('none');
    const [fadeDirection, setFadeDirection] = useState('start');
    const [logo, setLogo] = useState('');
    const [bgImg, setBgImg] = useState('');
    const [formHeight, setFormHeight] = useState('550px');
    const [showImage, setShowImage] = useState('none');

    // fetching stuff from firebase
    // const [courses, setCourses] = useState([]);

    // // fetch the courses and senior level of the student
    // const { student, company } = props;
    // useEffect(() => {
    //     if (student){
    //         const url = 'https://fanaka-sasa-default-rtdb.firebaseio.com/students.json';
    //         fetch(url)
    //             .then(res => {
    //                 return res.json()
    //             })
    //             .then(res => {
    //                 // setCourses(res.data);
    //                 console.log(res);
    //                 console.log('hapa');
    //             })
    //             .catch(err => {
    //                 console.log(err.message);
    //                 console.log('error');
    //             })
    //     } else if (company){

    //     }
    // }, [student, company])

    // handle the content in the editor and assign to description
    const handleEditorChange: (content: any, editor: any) => void = (content, editor) => {
        props.values.description = content;
    }

    // handle file change and render its preview
    const handleFileChange: (event: any) => void = (event) => {
        setFormHeight('650px');
        if (!props.values.logo1){
            const files: any[] = Array.from(event.target.files);
            files.forEach((file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    props.onLogoUpload(reader.result);
                };
            });
            props.values.logo1 = true;
            setLogo(URL.createObjectURL(event.target.files[0]));
            setShowImage('block');
        } else {
            const files: any[] = Array.from(event.target.files);
            files.forEach((file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    props.onBgUpload(reader.result);
                };
            });
            setBgImg(URL.createObjectURL(event.target.files[0]));
            // console.log(props.values.backgroundImage, props.values.logo);
            setShowImage('block');
        }
    }

    // handling the pdf upload and converting it to base64
    const handlePdfChange: (event: any) => void = (event) => {
        const files: any[] = Array.from(event.target.files);
        files.forEach((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () {
                props.onPdfUpload(reader.result);
            };
        });
    }

    // submit the form and send it to redux store to handle its upload process
    const onFormSubmit: (event: any) => void = (event) => {
        event.preventDefault();
        // student
        if (props.student && props.values.description !== ''){
            if (props.logo && props.bg){
                const data: StudentData = {
                    name: props.values.name,
                    campus: props.values.campus,
                    course: props.values.course,
                    description: props.values.description,
                    twitter: props.values.twitter,
                    logo: props.logo,
                    backgroundImage: props.bg,
                    resume: props.pdf
                }
                props.onStudentFormSubmit(data);
            }
        }

        // center
        if (props.center && props.values.description !== ''){
            if (props.logo && props.bg){
                const data: CenterData = {
                    name: props.values.name,
                    category: props.values.category,
                    course: props.values.course,
                    description: props.values.description,
                    twitter: props.values.twitter,
                    logo: props.logo,
                    backgroundImage: props.bg,
                    location: props.values.location
                }
                props.onCenterFormSubmit(data);
            }
        }
    }

    // route to student detail page after form successfull submit
    // if (props.student && props.studentData){
    //     props.push(`/students/${props.values.name.split(' ')[0]}`);
    // }

    /**
     * next button onClick funtionality
     */
    const onBtnClick: () => void = () => {
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
    
    /**
     * back button onClick funtionality
     */
    const onBackBtnClick: () => void = () => {
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
                        <div className="top-student-form" style={{height: `${formHeight}`}}>
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
                                
                                <div className="image-top" style={{display: `${showImage}`}}>
                                    <img alt='' src={logo} />
                                </div>
                                <div className="image-bg" style={{display: `${showImage}`}}>
                                    <img alt='' src={bgImg} />
                                </div>

                                <div className="inputs" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                                    {fields.map((item, i) => {
                                        let displayItem;
                                        if (item.level === formNum){
                                            displayItem = {...fadeDirection === 'right' ?
                                                            <Fade right key={item.name}>
                                                                <Field
                                                                    {...item}
                                                                    {...props}
                                                                    // {...courses}
                                                                    value={props.values[item.name]}
                                                                    onChange={props.handleChange}
                                                                    onFileChange={handleFileChange}
                                                                    handleEditorChange={handleEditorChange}
                                                                    handlePdfChange={handlePdfChange}
                                                                    width='330px' />
                                                            </Fade>
                                                            : fadeDirection === 'left' ?
                                                            <Fade left key={item.name}>
                                                                <Field
                                                                    {...item}
                                                                    {...props}
                                                                    // {...courses}
                                                                    value={props.values[item.name]}
                                                                    onChange={props.handleChange}
                                                                    onFileChange={handleFileChange}
                                                                    handleEditorChange={handleEditorChange}
                                                                    handlePdfChange={handlePdfChange}
                                                                    width='330px' />
                                                            </Fade>
                                                            :
                                                            <Fade key={item.name}>
                                                                <Field
                                                                    {...item}
                                                                    {...props}
                                                                    // {...courses}
                                                                    value={props.values[item.name]}
                                                                    onChange={props.handleChange}
                                                                    onFileChange={handleFileChange}
                                                                    handleEditorChange={handleEditorChange}
                                                                    handlePdfChange={handlePdfChange}
                                                                    width='330px' />
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
                                                width='100px'
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
                                            width='100px'
                                            radius='5px'
                                            height='40px' />
                                    </div>
                                </Fade>
                            }
                                <div className="btn" style={{marginBottom: '10px'}}>
                                    <Button
                                        type={btnType}
                                        click={onBtnClick}
                                        name={btnText}
                                        size='1.2rem'
                                        bgcolor='#55BC7E'
                                        color='white'
                                        border='none'
                                        width='100px'
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

// interface StateRegistration {
//     studentData: string[];
//     spinner: boolean;
//     logo: string;
//     bg: string;
//     pdf: string;
// }

const mapPropsToState: (state: any) => {} = state => {
    return {
        studentData: state.student.student !== [],
        spinner: state.student.formSumbitStart,
        logo: state.student.logo,
        bg: state.student.bg,
        pdf: state.student.pdf
    }
}

const mapPropsToDispatch: (dispatch: any) => {} = dispatch => {
    return {
        onStudentFormSubmit: (data: StudentData) => dispatch(actions.initStudentForm(data)),
        onLogoUpload: (logo: any) => dispatch(actions.logoTemp(logo)),
        onBgUpload: (bg: any) => dispatch(actions.bgTemp(bg)),
        onPdfUpload: (pdf: any) => dispatch(actions.pdfUpload(pdf)),
        // centers
        onCenterFormSubmit: (data: any) => dispatch(actions.initCenterForm(data)),
    }
}

/**
 * fields that are going to be present in the form
 */
// interface FormFields {
//     name: string;
//     campus: string;
//     course: string;
//     description: string;
//     twitter: string;
//     category: string;
//     location: string;
// }

export default connect(mapPropsToState, mapPropsToDispatch)(withFormik({
    mapPropsToValues: () => ({
        name: '',
        campus: '',
        course: '',
        description: '',
        twitter: '',
        category: '',
        location: ''
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
        // description: Yup.string()
        //     .min(1, 'description cannot be empty!')
        //     .max(1000, 'description is too long!')
        //     .required('required!'),
        twitter: Yup.string(),
        category: Yup.string(),
        location: Yup.string()
    }),
    handleSubmit: () => {
        
    }
})(RegistrationForm));
