import React from 'react'

function Button(props) {
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
                padding: '10px'
            }}
            onClick={props.createMessage}
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
