import React from 'react'
import { Marker, Search} from '../../Assets/icons'

function SearchBar({job, student, center}) {
    return (
        <div className="search-filter" style={{display: 'grid', gridTemplateColumns: '1fr 0.6fr 0.6fr 0.6fr 0.25fr', height: '50px', backgroundColor: 'white', borderRadius: '10px', width: '92%', marginBottom: '20px', marginLeft: `${student && '4%'}`}}>
            <div className="search-input-1" style={{borderRight: '3px solid #FAFAFB'}}>
                <div style={{padding: '15px 40px', color: 'grey', fontSize: '0.9rem'}}>
                    <span style={{marginRight: '10px'}}>
                        <Search height={15} color='grey' />
                    </span>
                    <span style={{border: '1px solid grey', padding: '3px 5px', borderRadius: '10px'}}>
                        {job ? 'product designer' : student ? 'Electrical Eng' : center ? 'Technology' : 'Agriculture' }
                    </span>
                    <span style={{border: '1px solid grey', padding: '3px 5px', marginLeft: '5px', marginRight: '10px', borderRadius: '10px'}}>
                        {job ? 'UI/UX designer' : student ? 'Software Eng' : center ? 'Agriculture' : 'Automotive' }
                    </span>
                    |
                </div>
            </div>
            <div className="search-input-2" style={{borderRight: '3px solid #FAFAFB'}}>
                <div style={{padding: '15px 40px', color: 'grey', fontSize: '0.9rem', fontWeight: 'bold'}}>
                    <span style={{marginRight: '10px'}}>
                        <Marker height={15} color='grey' />
                    </span>
                    Nairobi, Kenya
                </div>
            </div>
            <div className="search-input-2" style={{borderRight: '3px solid #FAFAFB'}}>
                <div style={{padding: '15px 40px', color: 'grey', fontSize: '0.9rem', fontWeight: 'bold'}}>
                    {job ? 'Sophomore Level' : student ? 'Senior Level' : center ? 'Agriculture' : 'Technology' }
                </div>
            </div>
            <div className="search-input-2" style={{borderRight: '3px solid #FAFAFB'}}>
                <div style={{padding: '15px 40px', color: 'grey', fontSize: '0.9rem', textDecoration: `${!job && 'line-through'}`}}>
                    Salary Range
                </div>
            </div>
            <div className="search-btn" style={{backgroundColor: '#55BC7E', textAlign: 'center', borderTopRightRadius: '10px', borderBottomRightRadius: '10px'}}>
                <div className="text" style={{marginTop: '15px', color: 'white', fontSize: '0.8rem'}}>
                    {job ? 'Find Job' : student ? 'Find Student' : center ? 'Find Center' : 'Find Company' }
                </div>
            </div>
        </div>
    )
}

export default SearchBar
