import React from 'react';
import CategorySection from './CategorySection/CategorySection';
import ExploreCompanySection from './ExploreCompanySection/ExploreCompanySection';
import ExploreStudentSection from './ExploreStudentSection/ExploreStudentSection';

import IntroSection from './IntroSection/IntroSection';
import JobSection from './JobSection/JobSection';
import ProcessSection from './ProcessSection/ProcessSection';
// import Subscribe from './Subscribe/Subscribe';
import Testimonials from './Testimonials/Testimonials';

function LandingPage(): JSX.Element {
    return (
        <div>
            <IntroSection />
            <ProcessSection />
            <JobSection />
            <ExploreStudentSection />
            <CategorySection />
            <ExploreCompanySection />
            <Testimonials />
            {/* <Subscribe /> */}
        </div>
    )
}

export default LandingPage;
