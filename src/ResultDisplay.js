import React from 'react';

const ResultDisplay = (props) => {
    console.log(props)
    const {swapiData, type} = props
    if(typeof swapiData === 'string') return <div>{swapiData}</div>

    if(type === 'people') {
        return (
            <div>
                <h2>Name: {swapiData.name}</h2>
                <p>Height: {swapiData.height}</p>
                <p>Weight: {swapiData.mass}</p>
                <p>Hair color: {swapiData.hair_color}</p>
                <p>Skin color: {swapiData.skin_color}</p>
                <p>Eye color: {swapiData.eye_color}</p>
                <p>Birth year: {swapiData.birth_year}</p>
                <p>Gender: {swapiData.gender}</p>
                <p>Homeworld: {swapiData.homeworld}</p>
                <p>Species: {swapiData.species}</p>
                <p>Vehicles owned: {swapiData.vehicles}</p>
                <p>Starships owned: {swapiData.starships}</p>
                <p>Appeared in: {swapiData.films}</p>
            </div>
        );
    } else if (type === 'planets') {
        return (
            <div>
                <h2>Name: {swapiData.name}</h2>
                <p>Rotation period: {swapiData.rotation_period}</p>
                <p>Orbital period: {swapiData.orbital_period}</p>
                <p>Diameter: {swapiData.diameter}</p>
                <p>Climate: {swapiData.climate}</p>
                <p>Gravity: {swapiData.gravity}</p>
                <p>Terrain: {swapiData.terrain}</p>
                <p>Surface water: {swapiData.surface_water}</p>
                <p>Population: {swapiData.population}</p>
                <p>Residents: {swapiData.residents}</p>
                <p>Appeared in: {swapiData.films}</p>
            </div>
        )
    } else if (type === 'vehicles') {
        return (
            <div>
                <h2>Name: {swapiData.name}</h2>
                <p>Model: {swapiData.model}</p>
                <p>Manufacturer: {swapiData.manufacturer}</p>
                <p>Cost (in credits): {swapiData.cost_in_credits}</p>
                <p>Length: {swapiData.length}</p>
                <p>Max atmosphering speed: {swapiData.max_atmosphering_speed}</p>
                <p>Crew: {swapiData.crew}</p>
                <p>Passengers: {swapiData.passengers}</p>
                <p>Cargo capacity: {swapiData.cargo_capacity}</p>
                <p>Consumables: {swapiData.consumables}</p>
                <p>Vehicle class: {swapiData.vehicle_class}</p>
                <p>Known pilots: {swapiData.pilots}</p>
                <p>Appeared in: {swapiData.films}</p>
            </div>
        )
    } else if (type === 'species') {
        return (
            <div>
                <h2>Name: {swapiData.name}</h2>
                <p>Classification: {swapiData.classification}</p>
                <p>Designation: {swapiData.designation}</p>
                <p>Average height: {swapiData.average_height}</p>
                <p>Skin colors: {swapiData.skin_colors}</p>
                <p>Hair colors: {swapiData.hair_colors}</p>
                <p>Eye colors: {swapiData.eye_colors}</p>
                <p>Average lifespan: {swapiData.average_lifespan}</p>
                <p>Homeworld: {swapiData.homeworld}</p>
                <p>Language: {swapiData.language}</p>
                <p>Known members: {swapiData.people}</p>
                <p>Appeared in: {swapiData.films}</p>
            </div>
        )
    } else if (type === 'films') {
        return (
            <div>
                <h2>Title: {swapiData.title}</h2>
                <p>Episode: {swapiData.episode_id}</p>
                <p>Director: {swapiData.director}</p>
                <p>Producer(s): {swapiData.producer}</p>
                <p>Release date: {swapiData.release_date}</p>
                <p>Characters: {swapiData.characters}</p>
                <p>Planets: {swapiData.planets}</p>
                <p>Starships: {swapiData.starships}</p>
                <p>Vehicles: {swapiData.vehicles}</p>
                <p>Species: {swapiData.species}</p>
                <p>Opening crawl: {swapiData.opening_crawl}</p>
            </div>
        ) 
    } else {
        return (
        <div className="result-display">
            <p>{JSON.stringify(swapiData)}</p>
        </div>
    )
    }
    
}

export default ResultDisplay;