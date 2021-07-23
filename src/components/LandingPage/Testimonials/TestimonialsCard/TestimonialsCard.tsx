import React from 'react';
import { Quotes } from '../../../../Assets/icons';
import { TestimonialData } from '../Testimonials';
import './TestimonialsCard.css';

function TestimonialsCard({image}: TestimonialData) {
    return (
        <div>
            <div className="testimonial-card">
                <div className="testimonial-card-body">
                    <div className="top">
                        {image}
                        <div className="icon-quotes">
                            <span>
                                <Quotes height={20} color="white" />
                            </span>
                        </div>
                    </div>
                    <div className="middle">
                        This platform enabled me to secure my dream job in Apple, I am so excited and recommend any student to join it.
                    </div>
                    <div className="line"></div>
                    <div className="bottom">
                        <div className="name">
                            Randy Elliot
                        </div>
                        <div className="role">
                            Creative Director & CEO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard;
