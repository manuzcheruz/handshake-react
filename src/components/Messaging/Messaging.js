import React, { useState } from 'react'

import './Messaging.css'

function Messaging(props) {
    const [height, setHeight] = useState('50px')
    const [active, setActive] = useState(false)

    const onSelectMessage = () => {
        setActive(!active)
        if (active === true) {
            setHeight('550px')
        } else {
            setHeight('50px')
        }
    }
    return (
        <div className="message" style={{height: `${height}`}}>
            <div className="header" onClick={onSelectMessage}>
                <div className="image">
                </div>
                <div className="title">
                    Messaging
                </div>
                <div className="icons">

                </div>
            </div>
            <div className="body">
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
    )
}

export default Messaging
