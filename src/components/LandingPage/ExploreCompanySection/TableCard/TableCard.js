import React from 'react'

import './TableCard.css'

function TableCard({name, image, time, role, salary}) {
    return (
        <div className="table-card">
            <div className="table-card-body">
                <div className="table-card-item">
                    <span>{image}</span>
                    {role}
                </div>
                <div className="table-card-item">
                    {name}
                </div>
                <div className="table-card-item">
                    {salary}
                </div>
                <div className="table-card-item">
                    {time}
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
