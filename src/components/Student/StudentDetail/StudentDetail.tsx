import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../Store/actions'
import PDFViewer from 'pdf-viewer-reactjs';
import { StudentSkills, } from '../interfaces';

import { Map, Marker as GoogleMarker, GoogleApiWrapper } from 'google-maps-react';
import { Apple, Benz, Facebook, Google, Heart, Instagram, Linkedin, Microsoft, School, Share, Slack, Briefcase, Whatsapp } from '../../../Assets/icons';
import Aux from '../../../hoc/Aux'
import Pagination from '../../../Shared/Pagination/Pagination'
import CenterCard from '../../Center/CenterCard/CenterCard'
import JobCard from '../../LandingPage/JobSection/JobCard/JobCard'
import Navbar from '../../Navbar/Navbar'
import Messaging from '../../Messaging/Messaging'

/**
 * need index import here, later absolute one
 */
// import appleImage from '../../../Assets/Images/mebg.png'
// import me from '../../../Assets/Images/me.png';
import mem1 from '../../../Assets/Images/mem1.png';
import mem2 from '../../../Assets/Images/mem2.png';
import mem3 from '../../../Assets/Images/mem3.jpg';
import mem4 from '../../../Assets/Images/mem4.png';
import mem5 from '../../../Assets/Images/mem5.jpg';
import mem6 from '../../../Assets/Images/mem6.png';
import mem7 from '../../../Assets/Images/mem7.jpg';
import mem8 from '../../../Assets/Images/mem8.jpg';

import '../../Company/CompanyDetail/CompanyDetail.css';

const skills: StudentSkills[] = [
    {
        name: 'React Js',
        num: 34
    },
    {
        name: 'Django',
        num: 26
    },
    {
        name: 'Typescript',
        num: 24
    },
    {
        name: 'Git',
        num: 43
    },
    {
        name: 'Firebase',
        num: 21
    },
    {
        name: 'Express Js',
        num: 40
    },
    {
        name: 'MongoDB',
        num: 19
    }
]

/**
 * Shared component by the student and company detail pages. 
 * Is customized based on the props passed to it.
 * @param {*} props 
 * @returns 
 */
function CompanyDetail(props: any): JSX.Element {
    const { onStudentDetailFetch, studentFromReg } = props;

    useEffect(() => {
        if (!studentFromReg){
            onStudentDetailFetch()
        }
    }, [onStudentDetailFetch, studentFromReg]);

    let student = [];
    if (props.studentFromReg){
        student = props.studentFromReg
    } else {
        student = props.studentFromFetch
    }

    const resume = student.resume;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=check%20out%20${student.name}%20profile`

    return (
        <Aux>
            <Navbar bgColor='#FAFAFB' core />
            <div className="section" style={{backgroundColor: '#FAFAFB'}}>
                <div className="container">
                    <Messaging />
                    <div className="company-detail-wrapper">
                        {student && (
                                <div className="profile">
                                    <div className="top">
                                        <div className="bg-image">
                                            <img alt='' src={student.backgroundImage} height='auto' width='100%' />
                                        </div>
                                        <div className="top-bottom-block">
                                            <div className="small-image-block">
                                                <div className="image">
                                                    <div className="logo" style={{marginLeft: '-5px'}}>
                                                        <img alt='' src={student.logo} height='100px' />
                                                    </div>
                                                </div>
                                                <div className="name">
                                                    <div className="title">
                                                        {student.name}
                                                    </div>
                                                    <div className="subtitle">
                                                        <span><Briefcase height={15} /></span>
                                                        {student.course}
                                                    </div>
                                                    <div className="subtitle">
                                                        <span><School height={15} /></span>
                                                        {student.campus}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="social">
                                                <div className="icons">
                                                    <span>
                                                        <Share height={20} color='grey' />
                                                    </span>
                                                </div>
                                                <div className="icons">
                                                    <span>
                                                        <Linkedin height={20} />
                                                    </span>
                                                </div>
                                                <div className="icons">
                                                    <a href={facebookUrl}
                                                        target="_blank" rel="noreferrer">
                                                        <span>
                                                            <Facebook height={20} />
                                                        </span>
                                                    </a>
                                                </div>
                                                <div className="icons">
                                                    <a href="e">
                                                        <span>
                                                            <Whatsapp height={20} />
                                                        </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle" style={{height: '300px'}}>
                                        <div className="about">
                                            <div className="title">
                                                About <span>Me</span>
                                            </div>
                                            <div className="content" dangerouslySetInnerHTML={{__html: student.description}}></div>
                                        </div>
                                        <div className="activity">
                                            <div className="title">
                                                Activity
                                            </div>
                                            <div className="content" style={{marginTop: '15px'}}>
                                                <div className="item" style={{height: '70px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', marginBottom: '10px'}}>
                                                    <div className="image" style={{height: '70px', width: '100%', borderRadius: '10px'}}>
                                                        <img src={mem7} height="70px" alt="" style={{borderRadius: '10px'}} />
                                                    </div>
                                                    <div className="cont">
                                                        <div className="time" style={{height: '20px', width: '100%', marginTop: '3px', fontSize: '0.6rem', color: 'grey'}}>
                                                            October 13, 2020
                                                        </div>
                                                        <div className="title" style={{height: '35px', width: '100%', fontSize: '1rem', lineHeight: '18px'}}>
                                                            The best student and employer interaction platform
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="item" style={{height: '70px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px'}}>
                                                    <div className="image" style={{height: '70px', width: '100%', borderRadius: '10px'}}>
                                                        <img src={mem8} height="70px" alt="" style={{borderRadius: '10px'}} />
                                                    </div>
                                                    <div className="cont">
                                                        <div className="time" style={{height: '20px', width: '100%', marginTop: '3px', fontSize: '0.6rem', color: 'grey'}}>
                                                            September 15, 2020
                                                        </div>
                                                        <div className="title" style={{height: '35px', width: '100%', fontSize: '1rem', lineHeight: '18px'}}>
                                                            This design is really clean and beautiful
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="jobs-block">
                                        <div className="title-job-bottom">
                                            My <span>Skills</span>
                                        </div>
                                        <div className="skills" style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: '10px', marginTop: '15px'}}>
                                            {skills.map((item, i) => {
                                                return (
                                                    <div className="item" style={{height: '30px', width: '200px', borderRadius: '10px', padding: '5px 10px', backgroundColor: 'white', display: 'grid', gridTemplateColumns: '1fr 0.3fr'}}>
                                                        <span>{item.name}</span>
                                                        <span style={{color: 'grey'}}><span style={{marginRight: '5px'}}><Heart height='12' /></span>{item.num}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="jobs-block">
                                        <div>
                                            <PDFViewer
                                                document={{
                                                    url: {resume},
                                                }}
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="jobs-block">
                                        <div className="title-job-bottom">
                                            Recently <span>Applied</span> Jobs
                                        </div>
                                        <div className="jobs">
                                            <JobCard logo={<Apple height={60} />} />
                                            <JobCard logo={<Instagram height={60} />} />
                                            <JobCard logo={<Microsoft height={60} />} />
                                            <JobCard logo={<Benz height={60} />} />
                                            <JobCard logo={<Google height={60} />} />
                                            <JobCard logo={<Slack height={60} />} />
                                        </div>
                                    </div>
                                    <Pagination />
                                </div>
                            )
                        }

                        <div className="similar-companies">
                            <div className="title">
                                Similar <span>Students</span>
                            </div>
                            <div className="similar-companies-wrapper">
                                <CenterCard 
                                        icon={<img src={mem1} height="40px" alt="" style={{borderRadius: '10px'}} />}
                                        name='Jane Doe'
                                        location='JKUT'
                                        />
                                    <CenterCard 
                                        icon={<img src={mem2} height="40px" alt="" style={{borderRadius: '10px'}} />}
                                        name='John Doe'
                                        location='UoN'
                                        />
                                    <CenterCard 
                                        icon={<img src={mem3} height="40px" alt="" style={{borderRadius: '10px'}} />}
                                        name='John Doe'
                                        location='UoN'
                                        />
                                    <CenterCard 
                                        icon={<img src={mem4} height="40px" alt="" style={{borderRadius: '10px'}} />}
                                        name='John Doe'
                                        location='DeKUT'
                                        />
                                    <CenterCard 
                                        icon={<img src={mem5} height="40px" alt="" style={{borderRadius: '10px'}} />}
                                        name='John Doe'
                                        location='TUK'
                                        />
                                    <CenterCard 
                                        icon={<img src={mem6} height="40px" alt="" style={{borderRadius: '10px'}} />}
                                        name='John Doe'
                                        location='KU'
                                        />
                            </div>
                            <div className="location-map">
                                <div className="title">
                                    Location
                                </div>
                                <div className="map">
                                    <Map
                                    google={props.google}
                                    zoom={10}
                                    style={{width: '250px', height: '250px', borderRadius: '10px'}}
                                    initialCenter={{ lat: 0.38, lng: 35.8}}
                                    >
                                        <GoogleMarker title='business location' position={{ lat: 0.38, lng: 35.8}} />
                                    </Map>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

const mapPropsToState: (state: any) => {} = state => {
    return {
        studentFromReg: state.student.student,
        studentFromFetch: state.student.studentDetail
    }
}

const mapDispatchToProps: (dispatch: any) => { } = dispatch => {
    return {
        onStudentDetailFetch: () => dispatch(actions.initStudentDetailFetch())
    }
}

export default connect(mapPropsToState, mapDispatchToProps)(GoogleApiWrapper({apiKey: 'AIzaSyAok6R5nza1EEHCpuPHj8m6sV5HiQGH4o4'})(CompanyDetail));
