import React from 'react'
import { Gears } from '../../../../Assets/icons'

import './CategoryCard.css'

function CategoryCard() {
    return (
        <div className="cat-card">
            <div className="cat-card-body">
                <div className="cat-card-icon">
                    <div className="icon-gear">
                        <Gears height={50} color="#55BC7E" />
                    </div>
                </div>
                <div className="cat-card-title">
                    Programming & Tech
                </div>
                <div className="cat-card-subtitle">
                    1000+ new posted jobs
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
