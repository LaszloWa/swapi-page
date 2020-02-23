import React from 'react';

const RandomResult = ({results, type, getDetails}) => {
    if (results.detail === 'Not found') {
       return (
       <div>
            <p>Sorry, unable to fetch an item, please try again.</p>
        </div>
       )
    } else if (type === '') {
        return (
            <div>
                 <p>Please select a category first.</p>
             </div>
            )
    } else {
        if(type === 'people') {
            return (
                <div>
                    <h2>Name: {results.name}</h2>
                    <button value={'random'} className={'randomButton'} type='button' onClick={getDetails}>Display details</button>
                    <p>Height: {results.height}</p>
                    <p>Weight: {results.mass}</p>
                    <p>Hair color: {results.hair_color}</p>
                    <p>Skin color: {results.skin_color}</p>
                    <p>Eye color: {results.eye_color}</p>
                    <p>Birth year: {results.birth_year}</p>
                    <p>Gender: {results.gender}</p>
                    <p>Homeworld: {results.homeworld}</p>
                    <p>Species: {results.species}</p>
                    <p>Vehicles owned: {results.vehicles instanceof Array ? results.vehicles.join(', ') : results.vehicles}</p>
                    <p>Starships owned: {results.starships instanceof Array ? results.starships.join(', ') : results.starships}</p>
                    <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                </div>
            );
        } else if (type === 'planets') {
            return (
                <div>
                    <h2>Name: {results.name}</h2>
                    <button value={'random'} type='button' onClick={getDetails}>Display details</button>
                    <p>Rotation period: {results.rotation_period}</p>
                    <p>Orbital period: {results.orbital_period}</p>
                    <p>Diameter: {results.diameter}</p>
                    <p>Climate: {results.climate}</p>
                    <p>Gravity: {results.gravity}</p>
                    <p>Terrain: {results.terrain}</p>
                    <p>Surface water: {results.surface_water}</p>
                    <p>Population: {results.population}</p>
                    <p>Residents: {results.residents instanceof Array ? results.residents.join(', ') : results.residents}</p>
                    <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                </div>
            )
        } else if (type === 'vehicles') {
            return (
                <div>
                    <h2>Name: {results.name}</h2>
                    <button value={'random'} type='button' onClick={getDetails}>Display details</button>
                    <p>Model: {results.model}</p>
                    <p>Manufacturer: {results.manufacturer}</p>
                    <p>Cost (in credits): {results.cost_in_credits}</p>
                    <p>Length: {results.length}</p>
                    <p>Max atmosphering speed: {results.max_atmosphering_speed}</p>
                    <p>Crew: {results.crew}</p>
                    <p>Passengers: {results.passengers}</p>
                    <p>Cargo capacity: {results.cargo_capacity}</p>
                    <p>Consumables: {results.consumables}</p>
                    <p>Vehicle class: {results.vehicle_class}</p>
                    <p>Known pilots: {results.pilots instanceof Array ? results.pilots.join(', ') : results.pilots}</p>
                    <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                </div>
            )
        } else if (type === 'species') {
            return (
                <div>
                    <h2>Name: {results.name}</h2>
                    <button value={'random'} type='button' onClick={getDetails}>Display details</button>
                    <p>Classification: {results.classification}</p>
                    <p>Designation: {results.designation}</p>
                    <p>Average height: {results.average_height}</p>
                    <p>Skin colors: {results.skin_colors}</p>
                    <p>Hair colors: {results.hair_colors}</p>
                    <p>Eye colors: {results.eye_colors}</p>
                    <p>Average lifespan: {results.average_lifespan}</p>
                    <p>Homeworld: {results.homeworld}</p>
                    <p>Language: {results.language}</p>
                    <p>Known members: {results.people instanceof Array ? results.people.join(', ') : results.people}</p>
                    <p>Appeared in: {results.films instanceof Array ? results.films.join(', ') : results.films}</p>
                </div>
            )
        } else if (type === 'films') {
            return (
                <div>
                    <h2>Title: {results.title}</h2>
                    <button value={'random'} type='button' onClick={getDetails}>Display details</button>
                    <p>Episode: {results.episode_id}</p>
                    <p>Director: {results.director}</p>
                    <p>Producer(s): {results.producer}</p>
                    <p>Release date: {results.release_date}</p>
                    <p>Characters: {results.characters instanceof Array ? results.characters.join(', ') : results.characters}</p>
                    <p>Planets: {results.planets instanceof Array ? results.planets.join(', ') : results.planets}</p>
                    <p>Starships: {results.starships instanceof Array ? results.starships.join(', ') : results.starships}</p>
                    <p>Vehicles: {results.vehicles instanceof Array ? results.vehicles.join(', ') : results.vehicles}</p>
                    <p>Species: {results.species instanceof Array ? results.species.join(', ') : results.species}</p>
                    <p>Opening crawl: {results.opening_crawl}</p>
                </div>
            ) 
        } else {
            return (
            <div className="result-display">
                <p>{JSON.stringify(results)}</p>
            </div>
            )
        }
    }
}

export default RandomResult;