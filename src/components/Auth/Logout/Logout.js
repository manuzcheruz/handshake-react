import React from 'react'
import { Link } from 'react-router-dom'
import { Sad } from '../../../Assets/illustrators'
import Button from '../../../Shared/Button/Button'

function Logout(props) {
    return (
        <div className="section">
            <div className="container">
                <div className="illustration-sad"  style={{zIndex: '1', position: 'absolute', marginTop: '230px', marginLeft: '450px'}}>
                    <Sad height={400} />
                </div>
                <div className="logout-wrapper" style={{zIndex: '2', position: 'absolute', marginTop: '100px', marginLeft: '490px'}}>
                    <div className="title" style={{fontSize: '1rem', fontWeight: 'bold'}}>
                        We are sad to see you leave, are you sure you want to quit?
                    </div>
                    <div className="cancel-btn" style={{marginTop: '20px', marginLeft: '20%'}}>
                        <Link to='/jobs'>
                            <Button
                                name='Go Back'
                                color='white'
                                bgcolor='#55BC7E'
                                height='35px'
                                width='300px'
                                size='1rem'
                                radius='10px'
                                border='none' />
                        </Link>
                    </div>
                    <div className="confirm-btn" style={{marginTop: '20px', marginLeft: '20%'}}>
                        <Link to='/'>
                            <Button
                                name='Yes, Quit'
                                color='white'
                                bgcolor='#FF9066'
                                height='35px'
                                width='300px'
                                size='1rem'
                                radius='10px'
                                border='none' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Logout
