import React from 'react'

function Bookmark(props) {
    return (   
    <svg 
        height={props.height}
        color={props.color}
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 384 512"
    >
        <path fill="currentColor" d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"></path>
    </svg>
    )
}

export default Bookmark
