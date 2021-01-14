import React from 'react'

import './Testimonials.css'
import TestimonialsCard from './TestimonialsCard/TestimonialsCard'

function Testimonials() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
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
            </div>
        </div>
    )
}

export default Testimonials
