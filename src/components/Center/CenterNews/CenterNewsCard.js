import React from 'react'

function CenterNewsCard({title, image, time}) {
    return (
        <div className="item" style={{height: '100px', width: '100%', display: 'grid', gridTemplateColumns: '0.3fr 1fr', gridGap: '20px', borderRadius: '10px', marginBottom: '10px'}}>
                                            <div className="image" style={{height: '100px', width: '100%', borderRadius: '6px'}}>
                                                {image}
                                            </div>
                                            <div className="content">
                                                <div className="top" style={{marginTop: '5px', height: '20px', width: '100%', fontSize: '0.8rem', color: 'grey'}}>
                                                    {time}
                                                </div>
                                                <div className="bottom" style={{height: '50px', width: '100%', fontSize: '1.2rem', fontWeight: 'bold'}}>
                                                    {title}
                                                </div>
                                            </div>
                                        </div>
    )
}

export default CenterNewsCard
