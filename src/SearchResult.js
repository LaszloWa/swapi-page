import React from 'react';
// import {FilmData} from './FilmData';

const SearchResult = ({results, type}) => {
    console.log('Searchresult: ', results)
    const resultBanana = results.films;
    const FilmData = async (prop) => {
        console.log(prop)
    }
    FilmData('resultBanana: ', resultBanana)


    if(type === 'people') {
        return (
            <div className="people-result">
            {results.map(result => {
                console.log(result)
                return (
                    <div key={result.name}>
                        <h2>Name: {result.name}</h2>
                        <p>Height: {result.height}</p>
                        <p>Weight: {result.mass}</p>
                        <p>Hair color: {result.hair_color}</p>
                        <p>Skin color: {result.skin_color}</p>
                        <p>Eye color: {result.eye_color}</p>
                        <p>Birth year: {result.birth_year}</p>
                        <p>Gender: {result.gender}</p>
                        <p>Homeworld: {result.homeworld}</p>
                        <p>Species: {result.species}</p>
                        <p>Vehicles owned: {result.vehicles}</p>
                        <p>Starships owned: {result.starships}</p>
                        <p>Appeared in: {result.films}</p>
                    </div>
                )
                })
            }
            </div>
        )
    } else if (type === 'planets') {
        return (            
            <div className='planets-result'>
                {results.map(result => {
                    return (
                        <div key={result.name}>
                            <h2>Name: {result.name}</h2>
                            <p>Rotation period: {result.rotation_period}</p>
                            <p>Orbital period: {result.orbital_period}</p>
                            <p>Diameter: {result.diameter}</p>
                            <p>Climate: {result.climate}</p>
                            <p>Gravity: {result.gravity}</p>
                            <p>Terrain: {result.terrain}</p>
                            <p>Surface water: {result.surface_water}</p>
                            <p>Population: {result.population}</p>
                            <p>Residents: {result.residents}</p>
                            <p>Appeared in: {result.films}</p>
                        </div>
                    )})
                }
            </div>        
        )
    } else if (type === 'vehicles') {
        return (
            <div className='vehicle-result'>
                {results.map(result => {
                    return (
                        <div className={result.name}>
                            <h2>Name: {result.name}</h2>
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
                            <p>Known pilots: {result.pilots}</p>
                            <p>Appeared in: {result.films}</p>
                        </div>
                    )})
                }
            </div>
        )
    } else if (type === 'species') {
        return (
            <div className='species-result'>
                {results.map(result => {
                    return (
                        <div key={result.name}>
                            <h2>Name: {result.name}</h2>
                            <p>Classification: {result.classification}</p>
                            <p>Designation: {result.designation}</p>
                            <p>Average height: {result.average_height}</p>
                            <p>Skin colors: {result.skin_colors}</p>
                            <p>Hair colors: {result.hair_colors}</p>
                            <p>Eye colors: {result.eye_colors}</p>
                            <p>Average lifespan: {result.average_lifespan}</p>
                            <p>Homeworld: {result.homeworld}</p>
                            <p>Language: {result.language}</p>
                            <p>Known members: {result.people}</p>
                            <p>Appeared in: {result.films}</p>
                        </div>
                    )})
                }
            </div>
        )
    } else if (type === 'films') {
        return (
            <div className='films-result'>
                {results.map(result => {
                    return (
                        <div key={result.title}>
                            <h2>Title: {result.title}</h2>
                            <p>Episode: {result.episode_id}</p>
                            <p>Director: {result.director}</p>
                            <p>Producer(s): {result.producer}</p>
                            <p>Release date: {result.release_date}</p>
                            <p>Characters: {result.characters}</p>
                            <p>Planets: {result.planets}</p>
                            <p>Starships: {result.starships}</p>
                            <p>Vehicles: {result.vehicles}</p>
                            <p>Species: {result.species}</p>
                            <p>Opening crawl: {result.opening_crawl}</p>
                        </div>
                    )})
                }
            </div>
        )
    } else if (type === 'starships') {
        return (            
            <div className='starships-result'>
                {results.map(result => {
                    return (
                        <div key={result.name}>
                            <h2>Name: {result.name}</h2>
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
                            <p>Known pilots: {result.pilots}</p>
                            <p>Appeared in: {result.films}</p>
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