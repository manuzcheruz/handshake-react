import React from 'react'
import CategoryCard from './CategoryCard/CategoryCard'

import './CategorySection.css'

function CategorySection() {
    return (
        <div className="section" style={{backgroundColor: 'white'}}>
            <div className="container">
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
            </div>
        </div>   
    )
}

export default CategorySection
