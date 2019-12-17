import React from 'react';

const SearchBar = ({ searchInput,  listSelector, fetchData, randomData}) => {
    return (
        <div>
            <select onChange={listSelector}>
                <option value='default'>Please select a category to search</option>
                <option value='Planets'>Planets</option>
                <option value='Starships'>Starships</option>
                <option value='Vehicles'>Vehicles</option>
                <option value='People'>People</option>
                <option value='Films'>Films</option>
                <option value='Species'>Species</option>
            </select>
            <input type='text' placeholder='Enter an integer, or search by name.' onChange={searchInput}/>
            <button type='button' onClick={fetchData}>Search Database</button>
            <button type='button' onClick={randomData}>Surprise me!</button>
        </div>
    )
}

export default SearchBar;