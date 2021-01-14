import React from 'react'
import { Google } from '../../../../Assets/icons'

import './TableCard.css'

function TableCard() {
    return (
        <div className="table-card">
            <div className="table-card-body">
                <div className="table-card-item">
                    <span><Google height={15} color="green" /></span>
                    Product Manager
                </div>
                <div className="table-card-item">
                    Google
                </div>
                <div className="table-card-item">
                    $7,000
                </div>
                <div className="table-card-item">
                    2 hrs ago
                </div>
                <div className="table-card-item">
                    <button>
                        Apply
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TableCard
