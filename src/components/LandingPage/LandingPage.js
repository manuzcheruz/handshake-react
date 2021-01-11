import React from 'react'
import CategorySection from './CategorySection/CategorySection'
import ExploreStudentSection from './ExploreStudentSection/ExploreStudentSection'

import IntroSection from './IntroSection/IntroSection'
import JobSection from './JobSection/JobSection'
import ProcessSection from './ProcessSection/ProcessSection'
import Subscribe from './Subscribe/Subscribe'
import Testimonials from './Testimonials/Testimonials'

function LandingPage() {
    return (
        <div>
            <IntroSection />
            <ProcessSection />
            <JobSection />
            <CategorySection />
            <ExploreStudentSection />
            <Testimonials />
            <Subscribe />
        </div>
    )
}

export default LandingPage
