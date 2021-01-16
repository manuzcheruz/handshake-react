import React from 'react'
import { Google, Heart, Marker } from '../../../Assets/icons'
import Button from '../../../Shared/Button/Button'

import './CenterCard.css'

function CenterCard(props) {
    return (
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
                            <span><Marker height={15} color='orange' /></span>
                            {props.location}
                        </div>
                    </div>
                    <div className="heart">
                        <span>
                            <Heart height={20} color='red' />
                        </span>
                    </div>
                </div>
                <div className="bottom">
                    <div className="view">
                        <Button 
                            name='View'
                            height='30px'
                            width='100px'
                            border='none'
                            bgcolor='#F0F0F0'
                            radius='5px'
                            color='red'
                            />
                    </div>
                    <div className="message">
                        <Button 
                            name='Message'
                            height='30px'
                            width='100px'
                            border='none'
                            bgcolor='#F0F0F0'
                            radius='5px'
                            color='#2B2ECF'
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterCard
