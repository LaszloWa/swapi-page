import React from 'react';
import RandomResult from './RandomResult';
import SearchResult from './SearchResult';

const ResultDisplay = (props) => {
    const {resultNumber, resultString, type, fetchDetails} = props
    //if(typeof resultString === 'string') return <div>{resultString}</div>
    
    if (resultString === '' && resultNumber === 0) {
        return 'Nothing to show yet.'
    } else if (resultString === '') {
        return (
            <RandomResult results={resultNumber} type={type} />
        )    
    } else if (resultString !== '') {
        return (
            <SearchResult results={resultString.results} type={type} getDetails={fetchDetails}/>
        )
    }
    
}

export default ResultDisplay;