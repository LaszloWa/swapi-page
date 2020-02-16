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

// Getting resident names

export const getResidents = async function(planet) {   
    
    const residentNames = planet.residents.map(async resident => {
        const swapiResidentNumber = resident.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/people/${swapiResidentNumber}`);

        const data = await response.json();

        return data.name;
    })
    
    const results = await Promise.all(residentNames);
    
    if (results.length) {
        planet.residents = results;
    } else {
        planet.residents = ['None'];
    }
    
    return planet;
}

// Getting film names

export const getFilms = async function(planet) {   
    
    const filmNames = planet.films.map(async film => {
        const swapiFilmNumber = film.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/films/${swapiFilmNumber}`);

        const data = await response.json();

        return data.title;
    })
    
    const results = await Promise.all(filmNames);
    
    if (results.length) {
        planet.films = results;
    } else {
        planet.films = ['None'];
    }
    
    return planet;
}

// Getting pilot names

export const getPilots = async function(planet) {   
    
    const pilotNames = planet.pilots.map(async pilot => {
        const swapiPilotNumber = pilot.match(/\d+/g);

        const response = await fetch(`https://swapi.co/api/pilots/${swapiPilotNumber}`);

        const data = await response.json();

        return data.title;
    })
    
    const results = await Promise.all(pilotNames);
    
    if (results.length) {
        planet.pilots = results;
    } else {
        planet.pilots = ['None'];
    }
    
    return planet;
}