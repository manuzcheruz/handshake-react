import React from 'react'

function CenterNewsCard({title, image}) {
    return (
        <div className="item" style={{height: '100px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', borderRadius: '10px', marginBottom: '10px'}}>
                                            <div className="image" style={{height: '100px', width: '100%', borderRadius: '6px', backgroundColor: 'lime'}}>
                                                <img alt='' src={image} height='100px' width='auto' style={{borderRadius: '6px'}} />
                                            </div>
                                            <div className="content">
                                                <div className="top" style={{marginTop: '5px', height: '20px', backgroundColor: 'teal', width: '30%'}}>

                                                </div>
                                                <div className="bottom" style={{marginTop: '10px', height: '50px', width: '100%', fontSize: '0.8rem'}}>
                                                    {title}
                                                </div>
                                            </div>
                                        </div>
    )
}

export default CenterNewsCard