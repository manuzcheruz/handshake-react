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
                    style={{height: `${props.height}`, width: `${props.width}`, border: `${props.border}`}}
                />
            </div>
        )
    }
    return field
}

export default Field
