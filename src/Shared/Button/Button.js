import React from 'react'

function Button(props) {
    return (
        <button  style={{
            backgroundColor: `${props.bgcolor}`, 
            width: `${props.width}`, 
            height: `${props.height}`, 
            border: `${props.border}`,
            color: `${props.color}`,
            borderRadius: `${props.radius}`
        }}>
            {props.name}
            {props.icon && <span style={{
                marginLeft: `${props.iconMarginLeft}`, 
                marginTop: `${props.iconMarginTop}`
                }}>{props.icon}</span>}
        </button>
    )
}

export default Button
