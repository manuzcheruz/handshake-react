import React from 'react'
import { Quotes } from '../../../../Assets/icons'
import './TestimonialsCard.css'

function TestimonialsCard() {
    return (
        <div>
            <div className="testimonial-card">
                <div className="testimonial-card-body">
                    <div className="top">
                        <div className="icon-quotes">
                            <span>
                                <Quotes height={20} color="white" />
                            </span>
                        </div>
                    </div>
                    <div className="middle">
                        This platform enabled me to secure my dream job in Apple, I am so excited and recommend any student to join it.
                    </div>
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

export default TestimonialsCard
