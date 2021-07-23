import React from 'react';
import Fade from 'react-reveal/Fade';
import CategoryCard from './CategoryCard/CategoryCard';

import './CategorySection.css';

function CategorySection(): JSX.Element {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
                <Fade bottom>
                    <div className="category-wrapper">
                        <div className="title">
                            Browse Jobs 
                            <span>Categories</span>
                        </div>
                        <div className="subtitle">
                            Check out the numerous categories available for you to immerse yourself in and get your dream job
                        </div>
                        <div className="categories">
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                            <CategoryCard />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>   
    )
}

export default CategorySection;
