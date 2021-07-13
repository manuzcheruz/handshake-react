import React from 'react';
import { PropsButton } from '../interfaces';

/**
 * This button is shared across the entire web app 
 * recieving different props to customize it.
 * @param props 
 * @returns 
 */
function Button(props: PropsButton): JSX.Element {
    return (
        <div>
            <button  style={{
                backgroundColor: `${props.bgcolor}`, 
                width: `${props.width}`, 
                height: `${props.height}`, 
                border: `${props.border}`,
                color: `${props.color}`,
                borderRadius: `${props.radius}`,
                fontSize: `${props.size}`,
                padding: '5px 10px'
            }}
            onClick={props.click}
            type={props.type}
            >
                {props.name}
                {props.icon && <span style={{
                    marginLeft: `${props.iconMarginLeft}`, 
                    marginTop: `${props.iconMarginTop}`
                }}>{props.icon}</span>}
            </button>
        </div>
    )
}

export default Button
