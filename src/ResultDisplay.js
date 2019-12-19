import React from 'react';

const ResultDisplay = ({swapiData}) => {
    return (
        <p>{JSON.stringify(swapiData)}</p>
    )
}

export default ResultDisplay;