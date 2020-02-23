import React from 'react';
import RandomResult from './RandomResult';
import SearchResult from './SearchResult';

const ResultDisplay = ({resultNumber, resultString, type, fetchDetails}) => {
    if (resultString === '' && resultNumber === 0) {
        return 'Nothing to show yet.'
    } else if (resultString === '') {
        return (
            <RandomResult results={resultNumber} type={type} getDetails={fetchDetails} />
        )    
    } else if (resultString !== '') {
        return (
            <SearchResult results={resultString} type={type} getDetails={fetchDetails}/>
        )
    }
}

export default ResultDisplay;