import React from 'react';
// import {FilmData} from './FilmData';

const SearchResult = ({results, type, getDetails}) => {

    if(type === 'people') {
        return (
            <div className="people-result">
            {results.map((result, index) => {
                return (
                    <div key={result.name}>
                        <h2>Name: {result.name}</h2>
                        <button value={index} type='button' onClick={getDetails}>Display details</button>
                        <p>Height: {result.height}</p>
                        <p>Weight: {result.mass}</p>
                        <p>Hair color: {result.hair_color}</p>
                        <p>Skin color: {result.skin_color}</p>
                        <p>Eye color: {result.eye_color}</p>
                        <p>Birth year: {result.birth_year}</p>
                        <p>Gender: {result.gender}</p>
                        <p>Homeworld: {result.homeworld}</p>
                        <p>Species: {result.species}</p>
                        <p>Vehicles owned: {results.vehicles instanceof Array ? results.vehicles.join(', ') : results.vehicles}</p>
                        <p>Starships owned: {results.starships instanceof Array ? results.starships.join(', ') : results.starships}</p>
                        <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                    </div>
                )
                })
            }
            </div>
        )
    } else if (type === 'planets') {
        return (            
            <div className='planets-result'>
                {results.map((result, index) => {
                    return (
                        <div key={result.name}>
                            <h2>Name: {result.name}</h2>
                            <button value={index} type='button' onClick={getDetails}>Display details</button>
                            <p>Rotation period: {result.rotation_period}</p>
                            <p>Orbital period: {result.orbital_period}</p>
                            <p>Diameter: {result.diameter}</p>
                            <p>Climate: {result.climate}</p>
                            <p>Gravity: {result.gravity}</p>
                            <p>Terrain: {result.terrain}</p>
                            <p>Surface water: {result.surface_water}</p>
                            <p>Population: {result.population}</p>
                            <p>Residents: {results.residents instanceof Array ? results.residents.join(', ') : results.residents}</p>
                            <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                        </div>
                    )})
                }
            </div>        
        )
    } else if (type === 'vehicles') {
        return (
            <div className='vehicle-result'>
                {results.map((result, index) => {
                    return (
                        <div key={result.name}>
                            <h2>Name: {result.name}</h2>
                            <button value={index} type='button' onClick={getDetails}>Display details</button>
                            <p>Model: {result.model}</p>
                            <p>Manufacturer: {result.manufacturer}</p>
                            <p>Cost (in credits): {result.cost_in_credits}</p>
                            <p>Length: {result.length}</p>
                            <p>Max atmosphering speed: {result.max_atmosphering_speed}</p>
                            <p>Crew: {result.crew}</p>
                            <p>Passengers: {result.passengers}</p>
                            <p>Cargo capacity: {result.cargo_capacity}</p>
                            <p>Consumables: {result.consumables}</p>
                            <p>Vehicle class: {result.vehicle_class}</p>
                            <p>Known pilots: {results.pilots instanceof Array ? results.pilots.join(', ') : results.pilots}</p>
                            <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                        </div>
                    )})
                }
            </div>
        )
    } else if (type === 'species') {
        return (
            <div className='species-result'>
                {results.map((result, index) => {
                    return (
                        <div key={result.name}>
                            <h2>Name: {result.name}</h2>
                            <button value={index} type='button' onClick={getDetails}>Display details</button>
                            <p>Classification: {result.classification}</p>
                            <p>Designation: {result.designation}</p>
                            <p>Average height: {result.average_height}</p>
                            <p>Skin colors: {result.skin_colors}</p>
                            <p>Hair colors: {result.hair_colors}</p>
                            <p>Eye colors: {result.eye_colors}</p>
                            <p>Average lifespan: {result.average_lifespan}</p>
                            <p>Homeworld: {result.homeworld}</p>
                            <p>Language: {result.language}</p>
                            <p>Known members: {results.people instanceof Array ? results.people.join(', ') : results.people}</p>
                            <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                        </div>
                    )})
                }
            </div>
        )
    } else if (type === 'films') {
        return (
            <div className='films-result'>
                {results.map((result, index) => {
                    return (
                        <div key={result.title}>
                            <h2>Title: {result.title}</h2>
                            <button value={index} type='button' onClick={getDetails}>Display details</button>
                            <p>Episode: {result.episode_id}</p>
                            <p>Director: {result.director}</p>
                            <p>Producer(s): {result.producer}</p>
                            <p>Release date: {result.release_date}</p>
                            <p>Characters: {results.characters instanceof Array ? results.characters.join(', ') : results.characters}</p>
                            <p>Planets: {results.planets instanceof Array ? results.planets.join(', ') : results.planets}</p>
                            <p>Starships: {results.starships instanceof Array ? results.starships.join(', ') : results.starships}</p>
                            <p>Vehicles: {results.vehicles instanceof Array ? results.vehicles.join(', ') : results.vehicles}</p>
                            <p>Species: {results.species instanceof Array ? results.species.join(', ') : results.species}</p>
                            <p>Opening crawl: {result.opening_crawl}</p>
                        </div>
                    )})
                }
            </div>
        )
    } else if (type === 'starships') {
        return (            
            <div className='starships-result'>
                {results.map((result, index) => {
                    return (
                        <div key={result.title}>
                            {console.log(index)}
                            <h2>Name: {result.name}</h2>
                            <button value={index} type='button' onClick={getDetails}>Display details</button>
                            <p>Model: {result.model}</p>
                            <p>Manufacturer: {result.manufacturer}</p>
                            <p>Cost (in credits): {result.cost_in_credits}</p>
                            <p>Length: {result.length}</p>
                            <p>Max atmosphering speed: {result.max_atmosphering_speed}</p>
                            <p>Crew: {result.crew}</p>
                            <p>Passengers: {result.passengers}</p>
                            <p>Cargo capacity: {result.cargo_capacity}</p>
                            <p>Consumables: {result.consumables}</p>
                            <p>Hyperdrive rating: {result.hyperdrive_rating}</p>
                            <p>MGLT: {result.MGLT}</p>
                            <p>Starship class: {result.starship_class}</p>
                            <p>Known pilots: {results.pilots instanceof Array ? results.pilots.join(', ') : results.pilots}</p>
                            <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                        </div>
                    )})
                }
            </div>        
        )
    } else {
        return (
            <div className="result-display">
                <p>oh no</p>
            </div>
        )
    }
}

export default SearchResult;