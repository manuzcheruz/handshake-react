import React from 'react'
import { Bookmark, Marker } from '../../../../Assets/icons'

import Button from '../../../../Shared/Button/Button'
import './similar.css'

function Similar() {
    return (
        <div className="similar-card">
            <div className="similar-card-body">
                <div className="top">
                    <div className="image"></div>
                    <div className="name">
                        <div className="title-similar">
                            Sr. Product Designer
                        </div>
                        <div className="location-similar">
                            <span>
                                <Marker height={15} color="grey" />
                            </span>
                            Busia, Kenya
                        </div>
                    </div>
                    <div className="icon-bookmark">
                        <Bookmark height={15} color="grey" />
                    </div>
                </div>
                <div className="bottom">
                    <div className="btn-similar">
                        <Button 
                            name='Full Time'
                            bgcolor='#F0F0F0'
                            color='orange'
                            radius='5px'
                            height='25px'
                            width='80px'
                            size='0.6rem'
                            border='none'
                            />
                    </div>
                    <div className="btn-similar">
                        <Button 
                            name='Junior Level'
                            bgcolor='#F0F0F0'
                            color='blue'
                            radius='5px'
                            height='25px'
                            width='80px'
                            size='0.6rem'
                            border='none'
                            />
                    </div>
                    <div className="time-similar">
                        <span>
                            New &#8226;
                        </span>
                        8 days ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Similar
