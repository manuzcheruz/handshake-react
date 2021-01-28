import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Marker } from '../../../Assets/icons'
import Aux from '../../../hoc/Aux'
import Button from '../../../Shared/Button/Button'
import Chat from '../../Messaging/Chat/Chat'

import './CenterCard.css'

function CenterCard(props) {
    const [active, setActive] = useState(false)
    const [show, setShow] = useState('none')
    const onSelectHeart = () => {
        setActive(true)
    }
    const onMessageClick = () => {
        setShow('block')
    }
    return (
        <Aux>
            <Chat display={show} />
            <div className="center-card">
                <div className="center-card-body">
                    <div className="top">
                        <div className="icon-center">
                            <span>
                                {props.icon}
                            </span>
                        </div>
                        <div className="name">
                            <div className="title">
                                {props.name}
                            </div>
                            <div className="location">
                                <span><Marker height={10} color='orange' /></span>
                                {props.location}
                            </div>
                        </div>
                        <div className="heart">
                            <span onClick={onSelectHeart}>
                                <Heart height={20} color={active ? 'red' : '#F0F0F0'} />
                            </span>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="view">
                            <Link to="/companies/company">
                                <Button 
                                    name='View'
                                    size='0.6rem'
                                    height='30px'
                                    width='100px'
                                    border='none'
                                    bgcolor='#F0F0F0'
                                    radius='5px'
                                    color='red'
                                    />
                            </Link>
                        </div>
                        <div className="message-btn">
                            <Button 
                                name='Message'
                                size='0.6rem'
                                height='30px'
                                width='100px'
                                border='none'
                                bgcolor='#F0F0F0'
                                radius='5px'
                                color='#2B2ECF'
                                createMessage={onMessageClick}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default CenterCard
