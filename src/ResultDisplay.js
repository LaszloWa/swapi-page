import React from 'react';
import RandomResult from './RandomResult';
import SearchResult from './SearchResult';

const ResultDisplay = (props) => {
    console.log(props)
    const {resultNumber, resultString, type} = props
    //if(typeof resultString === 'string') return <div>{resultString}</div>
    console.log('resulstString: ', resultString)
    
    if (resultString === '' && resultNumber === 0) {
        return 'Nothing to show yet.'
    } else if (resultString === '') {
        return (
            <RandomResult results={resultNumber} type={type} />
        )    
    } else if (resultString !== '') {
        return (
            <SearchResult results={resultString.results} type={type}/>
        )
    }
    
}

export default ResultDisplay;