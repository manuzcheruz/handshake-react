import React from 'react'

import './Field.css'

function Field(props) {
    let field = ''
    if (props.elementName === 'input') {
        field = (
            <div className="field-item">
                <div className="label">
                    {props.label}
                </div>
                <input
                    name={props.name}
                    type={props.elementType}
                    placeholder={props.placeholder}
                />
            </div>
        )
    }
    return field
}

export default Field
