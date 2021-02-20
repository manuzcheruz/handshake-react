import React, { useState } from 'react'
import { Close, Expand, Grin, Image, PaperClip, Send } from '../../../Assets/icons'
import Button from '../../../Shared/Button/Button';
import { mem6 } from '../../../Assets/Images';

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
                    <img alt='' src={mem6} height='40px' />
                    <div className="dot" style={{backgroundColor: 'green', width: '10px', height: '10px', marginTop: '-18px', marginLeft: '25px', borderRadius: '50%', border: '3px solid white'}}>

                        </div>
                </div>
                <div className="name">
                    Collins Cheruiyot
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
                <div className="message-item">
                    Natafuta offer ya FAANG maze
                </div>
                <div className="message-item">
                    Nilipata ile advert ya google wakidai engineers
                </div>
                <div className="message-item">
                    Mzito vipi umeapply?
                </div>
            </div>
            <div className="message-compose">
                <div className="top-compose">
                    Write a message ...
                </div>
                <div className="bottom-compose">
                    <div className="icons-compose" style={{paddingTop: '5px'}}>
                        <span>
                            <Image height={20} color='black' />
                        </span>
                        <span style={{marginLeft: '20px', marginRight: '20px'}}>
                            <PaperClip height={20} color='black' />
                        </span>
                        <span>
                            <Grin height={20} color='black' />
                        </span>
                    </div>
                    <div className="btn">
                        <span>
                            <Button
                                name='send'
                                size='1rem'
                                bgcolor='#55BC7E'
                                color='white'
                                border='none'
                                width='100px'
                                radius='5px'
                                height='35px'
                                icon={<Send height={15} color='white' />}
                                iconMarginLeft='5px' />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
