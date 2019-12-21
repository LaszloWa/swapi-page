import React from 'react';
import {displayRandomResult} from 'util';

const ResultDisplay = (props) => {
    console.log(props)
    const {swapiData, type} = props
    if(typeof swapiData === 'string') return <div>{swapiData}</div>

    return (
        displayRandomResult(swapiData, type)
    )
    
}

export default ResultDisplay;