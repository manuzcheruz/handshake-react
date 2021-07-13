import React, { useState } from 'react'
import { Edit, Menu, Chevron, Google, Amazon, Campus2, Tesla, Facebook } from '../../Assets/icons'
import Aux from '../../hoc/Aux'
import Chat from './Chat/Chat'
import { me, mem5, mem6} from '../../Assets/Images'

import './Messaging.css'

/**
 * sample message properties to be fetched from the server
 */
export interface PropsMessage {
    image: any;
    name: string;
    time: string;
    message: string;
    active?: boolean;
}

const messageArr: PropsMessage[] = [
    {
        image: <img alt='' src={mem6} height='50px' />,
        name: 'Collins Cheruiyot',
        time: '12:30 PM',
        message: 'Collins: Mzito vipi umeapply',
        active: true
    },
    {
        name: 'Google LLC',
        time: 'Feb 06',
        message: 'Google: You are approved for the role',
        image: <Google height={45} />
    },
    {
        name: 'Amazon',
        time: 'Jan 31',
        message: 'You: Is the slot still available?',
        active: true,
        image: <Amazon height={50} />
    },
    {
        name: 'UON',
        time: 'Jan 30',
        message: 'UON: Please fill the required forms first',
        image: <Campus2 height={50} />
    },
    {
        name: 'Facebook',
        time: 'Jan 20',
        message: 'You: Are the internship roles still available?',
        image: <Facebook height={50} />
    },
    {
        name: 'Hillary Yegon',
        time: 'Jan 17',
        message: 'Hillary: Boss ulifikisha wapi ile maneno',
        image: <img alt='' src={mem5} height='50px' />
    },
    {
        name: 'Tesla',
        time: 'Jan 15',
        message: 'Tesla: You have been accepted for the ...',
        active: true,
        image: <Tesla height={50} />
    }
]

/**
 * renders the 
 * @param props 
 * @returns 
 */
function Messaging(props: PropsMessage): JSX.Element {
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
                        <img alt='' src={me} height='40px' />
                        <div className="dot" style={{backgroundColor: 'green', width: '10px', height: '10px', marginTop: '-19px', marginLeft: '25px', borderRadius: '50%', border: '3px solid white'}}>

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
                                {item.image}
                                {item.active && 
                                    <div className="dot" style={{backgroundColor: 'green', width: '10px', height: '10px', marginTop: '-20px', marginLeft: '32px', borderRadius: '50%', border: '3px solid white'}}>
                                    </div>
                                }
                            </div>
                            <div className="content">
                                <div className="name">
                                    <div className="user-name">
                                        {item.name}
                                    </div>
                                    <div className="time">
                                        {item.time}
                                    </div>
                                </div>
                                <div className="mess">
                                    {item.message}
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
