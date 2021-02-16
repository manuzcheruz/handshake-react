import React, { useState } from 'react'
import { Edit, Menu, Chevron } from '../../Assets/icons'
import Aux from '../../hoc/Aux'
import Chat from './Chat/Chat'

import './Messaging.css'

const messageArr = [
    {
        name: 'Collins Cheruiyot',
        time: '12:30 PM',
        message: 'You: Mzito vipi umeapply'
    },
    {
        name: '',
        time: '',
        message: ''
    },
    {
        name: '',
        time: '',
        message: ''
    },
    {
        name: '',
        time: '',
        message: ''
    },
    {
        name: '',
        time: '',
        message: ''
    },
    {
        name: '',
        time: '',
        message: ''
    }
]

function Messaging(props) {
    const [height, setHeight] = useState('50px')
    const [active, setActive] = useState(false)
    let [show, setShow] = useState('none')

    const onSelectMessage = () => {
        setActive(!active)
        if (active === true) {
            setHeight('550px')
        } else {
            setHeight('50px')
        }
    }

    const onSelectChat = () => {
        setShow('block')
    }
    return (
        <Aux>
            <Chat display={show} />
            <div className="message" style={{height: `${height}`}}>
                <div className="header" onClick={onSelectMessage}>
                    <div className="image">
                        <div className="dot" style={{backgroundColor: 'green', width: '10px', height: '10px', marginTop: '27px', marginLeft: '25px', borderRadius: '50%', border: '3px solid white'}}>

                        </div>
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
                    {messageArr.map((item, i) => {
                        return (
                            <div className="item" onClick={onSelectChat}>
                            <div className="image">

                            </div>
                            <div className="content">
                                <div className="name">
                                    <div className="user-name">
                                        Collins Cheruiyot
                                    </div>
                                    <div className="time">
                                        12:30 PM
                                    </div>
                                </div>
                                <div className="mess">
                                    You: Mzito vipi umeapply
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>

        </Aux>
    )
}

export default Messaging
