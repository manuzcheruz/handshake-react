import React from 'react'
import { Editor } from '@tinymce/tinymce-react'

import './Field.css'

function Field(props) {
    let field = ''
    if (props.elementName === 'input' && props.elementType === 'checkbox') {
        field = (
            <div className="field-item" style={{padding: '0px'}}>
                <input
                    name={props.name}
                    id={props.name}
                    type={props.elementType}
                    placeholder={props.placeholder}
                    style={{height: '15px', width: '15px'}}
                />
                <label for={props.name} className="label1" style={{marginLeft: '10px', fontSize: '0.8rem', color: 'grey'}}>
                    {props.label}
                </label>
            </div>
        )
    } else if (props.elementName === 'input') {
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
    } else {
        <div className="field-item">
                <div className="label">
                    {props.label}
                </div>
                <Editor
                    name={props.name}
                    type={props.elementType}
                    placeholder={props.placeholder}
                    apiKey="doh7uvi94w8ejme39aoeql00wr4wtwf5303k0o30lw2751ez"
                    // style={{height: `${props.height}`, width: `${props.width}`, border: `${props.border}`}}
                />
            </div>
    }
    return field
}

export default Field
