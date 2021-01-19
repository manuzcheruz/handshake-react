import React, { useState } from 'react'
import { Edit, Menu, Chevron } from '../../Assets/icons'
import Aux from '../../hoc/Aux'
import Chat from './Chat/Chat'

import './Messaging.css'

function Messaging(props) {
    const [height, setHeight] = useState('50px')
    const [active, setActive] = useState(false)
    const [chatHeight, setChatHeight] = useState('0px')

    const onSelectMessage = () => {
        setActive(!active)
        if (active === true) {
            setHeight('550px')
        } else {
            setHeight('50px')
        }
    }

    const onSelectChat = () => {
        setChatHeight('300px')
    }
    return (
        <Aux>
            <Chat height={chatHeight} />
            <div className="message" style={{height: `${height}`}}>
                <div className="header" onClick={onSelectMessage}>
                    <div className="image">
                    </div>
                    <div className="title">
                        Messaging
                    </div>
                    <div className="icons">
                        <div className="icon" style={{paddingLeft: '10px'}}>
                            <Edit height={20} color='black' />
                        </div>
                        <div className="icon" style={{transform: 'rotate(-90deg)', marginTop: '0px', paddingLeft: '13px', paddingTop: '15px' }}>
                            <Menu height={20} color='black' />
                        </div>
                        <div className="icon">
                            <Chevron height={20} color='black' />
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="item" onClick={onSelectChat}>
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="name">
                                <div className="user-name">

                                </div>
                                <div className="time">

                                </div>
                            </div>
                            <div className="mess">

                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="name">
                                <div className="user-name">

                                </div>
                                <div className="time">

                                </div>
                            </div>
                            <div className="mess">

                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="name">
                                <div className="user-name">

                                </div>
                                <div className="time">

                                </div>
                            </div>
                            <div className="mess">

                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="name">
                                <div className="user-name">

                                </div>
                                <div className="time">

                                </div>
                            </div>
                            <div className="mess">

                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="name">
                                <div className="user-name">

                                </div>
                                <div className="time">

                                </div>
                            </div>
                            <div className="mess">

                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="name">
                                <div className="user-name">

                                </div>
                                <div className="time">

                                </div>
                            </div>
                            <div className="mess">

                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="name">
                                <div className="user-name">

                                </div>
                                <div className="time">

                                </div>
                            </div>
                            <div className="mess">

                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <div className="image">

                        </div>
                        <div className="content">
                            <div className="name">
                                <div className="user-name">

                                </div>
                                <div className="time">

                                </div>
                            </div>
                            <div className="mess">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Aux>
    )
}

export default Messaging
