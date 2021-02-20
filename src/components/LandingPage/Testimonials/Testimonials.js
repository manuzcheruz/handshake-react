import React from 'react'
import Fade from 'react-reveal/Fade';
import { mem1, mem2, mem3 } from '../../../Assets/Images'

import './Testimonials.css'
import TestimonialsCard from './TestimonialsCard/TestimonialsCard'

const testimonialData = [
    {
        image: <img alt='' src={mem1} height='100px' />
    },
    {
        image: <img alt='' src={mem2} height='100px' />
    },
    {
        image: <img alt='' src={mem3} height='100px' />
    },
    {
        image: <img alt='' src={mem1} height='100px' />
    }
]

function Testimonials() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
                <Fade bottom>
                    <div className="testimonial-wrapper">
                        <div className="title">
                            What <span>Jobholders</span> say 
                            <br />
                            about us
                        </div>
                        <div className="testimonials">
                            {testimonialData.map((item, i) => {
                                return (
                                    <TestimonialsCard key={i} {...item} />
                                )
                            })}
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Testimonials
