export const SwapiDataString = async function(category, userInput) {
    try {
        const respString = await fetch(`https://swapi.co/api/${category}/?search=${userInput}`);
        const data = await respString.json();
        console.log('util', data);
        return data;
    } catch (e) {
        return 'Sorry, an unexpected error has occurred :('
    }
}

export const SwapiDataNumber= async function(category, randNum) {
    try{
        const respNum = await fetch(`https://swapi.co/api/${category}/${randNum}`);
        const data = await respNum.json();

        console.log('Random util: ', data);
        return data;
    } catch (e) {
        return 'Sorry, an unexpected error has occurred :('
    }
}

// Getting people names

export const getPeople = async function(initialArray, category) {   
    
    let placeholder = '';
    if (category === 'films') {
        placeholder = 'characters';
    } else {
        placeholder = 'residents';
    }

    const peopleNames = initialArray[placeholder].map(async person => {
        const swapiPersonNumber = person.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/people/${swapiPersonNumber}`);

        const data = await response.json();
        console.log('person ', person)
        return data.name;
    })
    
    const results = await Promise.all(peopleNames);
    
    if (results.length) {
        initialArray[placeholder] = results;
    } else {
        initialArray[placeholder] = ['None'];
    }
    
    return initialArray;
}

// Getting film names

export const getFilms = async function(initialArray) {   
    
    const filmNames = initialArray.films.map(async film => {
        const swapiFilmNumber = film.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/films/${swapiFilmNumber}`);

        const data = await response.json();

        return data.title;
    })
    
    const results = await Promise.all(filmNames);
    
    if (results.length) {
        initialArray.films = results;
    } else {
        initialArray.films = ['None'];
    }
    
    return initialArray;
}

// Getting pilot names

export const getPilots = async function(initialArray) {   
    
    const pilotNames = initialArray.pilots.map(async pilot => {
        const swapiPilotNumber = pilot.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/pilots/${swapiPilotNumber}`);

        const data = await response.json();

        return data.title;
    })
    
    const results = await Promise.all(pilotNames);
    
    if (results.length) {
        initialArray.pilots = results;
    } else {
        initialArray.pilots = ['None'];
    }
    
    return initialArray;
}

// Getting homeworld name

export const getHomeworld = async function(initialArray) {   
    const swapiHomeworldNumber = initialArray.homeworld.match(/\d+/g);

    const response = await fetch(`https://swapi.co/api/planets/${swapiHomeworldNumber}`);

    const data = await response.json();

    initialArray.homeworld = data.name;
    
    return initialArray;
}

// Getting species name

export const getSpecies = async function(initialArray) {  
    const speciesNames = initialArray.species.map(async species => {
        const swapiSpeciesNumber = species.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/species/${swapiSpeciesNumber}`);

        const data = await response.json();

        return data.name;
    })
    
    const results = await Promise.all(speciesNames);
    
    if (results.length) {
        initialArray.species = results;
    } else {
        initialArray.species = ['None'];
    }
    
    return initialArray;
}

// Getting planet names

export const getPlanets = async function(initialArray) {   
    const planetNames = initialArray.planets.map(async planet => {
        const swapiPlanetNumber = planet.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/planets/${swapiPlanetNumber}`);

        const data = await response.json();

        return data.title;
    })
    
    const results = await Promise.all(planetNames);
    
    if (results.length) {
        initialArray.planets = results;
    } else {
        initialArray.planets = ['None'];
    }
    
    return initialArray;
}

// Getting vehicle names

export const getVehicles = async function(initialArray) {   
    const vehicleNames = initialArray.vehicles.map(async vehicle => {
        const swapiVehicleNumber = vehicle.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/vehicles/${swapiVehicleNumber}`);

        const data = await response.json();

        return data.name;
    })
    
    const results = await Promise.all(vehicleNames);
    
    if (results.length) {
        initialArray.vehicles = results;
    } else {
        initialArray.vehicles = ['None'];
    }
    
    return initialArray;
}

// Getting starship names

export const getStarships = async function(initialArray) {   
    const Names = initialArray.starships.map(async starship => {
        const swapiStarshipNumber = starship.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/starships/${swapiStarshipNumber}`);

        const data = await response.json();

        return data.name;
    })
    
    const results = await Promise.all(Names);
    
    if (results.length) {
        initialArray.starships = results;
    } else {
        initialArray.starships = ['None'];
    }
    
    return initialArray;
}