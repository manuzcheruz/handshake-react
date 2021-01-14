import React from 'react'
import Fade from 'react-reveal/Fade';

import './Testimonials.css'
import TestimonialsCard from './TestimonialsCard/TestimonialsCard'

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
                            <TestimonialsCard />
                            <TestimonialsCard />
                            <TestimonialsCard />
                            <TestimonialsCard />
                            <TestimonialsCard />
                            <TestimonialsCard />
                            <TestimonialsCard />
                            <TestimonialsCard />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Testimonials
