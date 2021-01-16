import React from 'react'

import './Pagination.css'

// will be accessing the pages dynamically from the request url, this is just dummy pages
const pages = [
    {
        number: '1',
        active: false
    },
    {
        number: '2',
        active: false
    },
    {
        number: '3',
        active: false
    },
    {
        number: '4',
        active: true
    },
    {
        number: '5',
        active: false
    }
]

function Pagination() {
    return (
        <div className="pagination">
            {pages.map(item => {
                return (
                    <div className="pagination-items" style={{backgroundColor: `${item.active && '#55BC7E'}`, color: `${item.active && 'white'}` }}>
                        <div className="pagination-item">
                            {item.number}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Pagination
