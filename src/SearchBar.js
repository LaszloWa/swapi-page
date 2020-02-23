import React from 'react';

const SearchBar = ({ searchInput,  listSelector, fetchData, randomData}) => {
    return (
        <div className='searchBar'>
            <div>
                <select onChange={listSelector}>
                    <option value='default'>Select Category</option>
                    <option value='Planets'>Planets</option>
                    <option value='Starships'>Starships</option>
                    <option value='Vehicles'>Vehicles</option>
                    <option value='People'>People</option>
                    <option value='Films'>Films</option>
                    <option value='Species'>Species</option>
                </select>
                <input type='text' placeholder='Enter an integer, or search by name.' onChange={searchInput}/>
            </div>
            <div>
                <button className='searchButton' type='button' onClick={fetchData}>Search Database</button>
                <button className='searchButton' type='button' onClick={randomData}>Surprise me!</button>
            </div>
        </div>
    )
}

export default SearchBar;