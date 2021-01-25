import React, { useState } from 'react'
import { Close, Expand } from '../../../Assets/icons'

import './Chat.css'

function Chat(props) {

    let [display, setDisplay] = useState('300px') 
    
    const onSelectClose = () => {
        setDisplay('0px')
    }

    return (
        <div className="chat" style={{height: `${display}`, display: `${props.display ? props.display : 'none'}`}}>
            <div className="top">
                <div className="image">
                    <div className="dot" style={{backgroundColor: 'green', width: '10px', height: '10px', marginTop: '27px', marginLeft: '25px', borderRadius: '50%', border: '3px solid white'}}>

                        </div>
                </div>
                <div className="name">
                    manuz
                </div>
                <div className="icons">
                    <div className="icon">
                        <Expand height={20} color='black' />
                    </div>
                    <div className="icon" onClick={onSelectClose}>
                        <Close height={20} color='black' />
                    </div>
                </div>
            </div>
            <div className="chat-box">

            </div>
        </div>
    )
}

export default Chat
