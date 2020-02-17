import React from 'react';

const RandomResult = ({results, type}) => {
    console.log('results', results)
    if(type === 'people') {
        return (
            <div>
                <h2>Name: {results.name}</h2>
                <p>Height: {results.height}</p>
                <p>Weight: {results.mass}</p>
                <p>Hair color: {results.hair_color}</p>
                <p>Skin color: {results.skin_color}</p>
                <p>Eye color: {results.eye_color}</p>
                <p>Birth year: {results.birth_year}</p>
                <p>Gender: {results.gender}</p>
                <p>Homeworld: {results.homeworld}</p>
                <p>Species: {results.species}</p>
                <p>Vehicles owned: {results.vehicles.join(', ')}</p>
                <p>Starships owned: {results.starships.join(', ')}</p>
                <p>Appeared in: {results.films.join(', ')}</p>
            </div>
        );
    } else if (type === 'planets') {
        return (
            <div>
                <h2>Name: {results.name}</h2>
                <p>Rotation period: {results.rotation_period}</p>
                <p>Orbital period: {results.orbital_period}</p>
                <p>Diameter: {results.diameter}</p>
                <p>Climate: {results.climate}</p>
                <p>Gravity: {results.gravity}</p>
                <p>Terrain: {results.terrain}</p>
                <p>Surface water: {results.surface_water}</p>
                <p>Population: {results.population}</p>
                <p>Residents: {results.residents.join(', ')}</p>
                <p>Appeared in: {results.films.join(', ')}</p>
            </div>
        )
    } else if (type === 'vehicles') {
        return (
            <div>
                <h2>Name: {results.name}</h2>
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
                <p>Known pilots: {results.pilots.join(', ')}</p>
                <p>Appeared in: {results.films.join(', ')}</p>
            </div>
        )
    } else if (type === 'species') {
        return (
            <div>
                <h2>Name: {results.name}</h2>
                <p>Classification: {results.classification}</p>
                <p>Designation: {results.designation}</p>
                <p>Average height: {results.average_height}</p>
                <p>Skin colors: {results.skin_colors}</p>
                <p>Hair colors: {results.hair_colors}</p>
                <p>Eye colors: {results.eye_colors}</p>
                <p>Average lifespan: {results.average_lifespan}</p>
                <p>Homeworld: {results.homeworld}</p>
                <p>Language: {results.language}</p>
                <p>Known members: {results.people.join(', ')}</p>
                <p>Appeared in: {results.films.join(', ')}</p>
            </div>
        )
    } else if (type === 'films') {
        return (
            <div>
                <h2>Title: {results.title}</h2>
                <p>Episode: {results.episode_id}</p>
                <p>Director: {results.director}</p>
                <p>Producer(s): {results.producer}</p>
                <p>Release date: {results.release_date}</p>
                <p>Characters: {results.characters.join(', ')}</p>
                <p>Planets: {results.planets.join(', ')}</p>
                <p>Starships: {results.starships.join(', ')}</p>
                <p>Vehicles: {results.vehicles.join(', ')}</p>
                <p>Species: {results.species.join(', ')}</p>
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

export default RandomResult;