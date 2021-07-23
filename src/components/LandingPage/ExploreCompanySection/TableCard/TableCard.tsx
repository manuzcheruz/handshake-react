import React from 'react';
import { CompanyTable } from '../ExploreCompanySection';

import './TableCard.css';

/**
 * individual card components of the table
 * @param param0
 * @returns 
 */
function TableCard({name, image, time, role, salary}: CompanyTable): JSX.Element {
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

export default TableCard;
