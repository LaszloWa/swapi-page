// Functions to fetch the user input, depending on random input ('Surprise me') or user input

export const SwapiDataString = async function(category, userInput) {
    try {
        const respString = await fetch(`https://swapi.co/api/${category}/?search=${userInput}`);
        let data = await respString.json();
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

// Functions to get additional information on individual properties

// Getting people names

export const getPeople = async function(initialArray, category) {   
    
    let placeholder = '';
    if (category === 'films') {
        placeholder = 'characters';
    } else if (category === 'planets') {
        placeholder = 'residents';
    } else if (category === 'species') {
        placeholder = 'people';
    }

    const peopleNames = initialArray[placeholder].map(async person => {
        const swapiPersonNumber = person.match(/\d+/g);
        
        if (swapiPersonNumber[0] === '1') { // Workaround for a network error that only occurs with Luke
            return 'Luke Skywalker'
        } else {
            const response = await fetch(`https://swapi.co/api/people/${swapiPersonNumber}`);

            const data = await response.json();
            return data.name;
        } 
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

        return data.name;
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


// functions fetching data for the different categories

// Check if user wants random result or not
const checkIfRandom = function(input) {
    let queryType = '';
    if(input) {
        queryType = SwapiDataNumber
    } else {
        queryType = SwapiDataString
    }
    return queryType;
}

// all data for category 'people'
export const peopleCategory = async function (category, input, isRandom) {
    const addingPerson = await SwapiDataNumber(category, input);
    const addingPeopleHomeworld = await getHomeworld(addingPerson, category);
    const addingPeopleFilms = await getFilms(addingPeopleHomeworld);
    const addingPeopleSpecies = await getSpecies(addingPeopleFilms);
    const addingPeopleVehicles = await getVehicles(addingPeopleSpecies);
    const addingPeopleStarships = await getStarships(addingPeopleVehicles);
    
    return addingPeopleStarships;
}

// all data for category 'planets'
export const planetCategory = async function (category, input, isRandom) {
    const addingPlanet = await SwapiDataNumber(category, input);
    const addingPlanetResidents = await getPeople(addingPlanet, category);
    const addingPlanetFilms = await getFilms(addingPlanetResidents);

    return addingPlanetFilms;
}

// all data for category 'films'
export const filmCategory = async function (category, input, isRandom) {
    const addingFilm = await SwapiDataNumber(category, input);
    const addingFilmPeople = await getPeople(addingFilm, category);
    const addingFilmPlanets = await getPlanets(addingFilmPeople);
    const addingFilmStarships = await getStarships(addingFilmPlanets);
    const addingFilmVehicles = await getVehicles(addingFilmStarships);
    const addingFilmSpecies = await getSpecies(addingFilmVehicles);

    return addingFilmSpecies;
}

// all data for category 'species'
export const speciesCategory = async function (category, input, isRandom) {
    const addingSpecies = await SwapiDataNumber(category, input);
    const addingSpeciesFilms = await getFilms(addingSpecies, category);
    const addingSpeciesHomeworld = await getHomeworld(addingSpeciesFilms);
    const addingSpeciesPeople = await getPeople(addingSpeciesHomeworld, category);

    return addingSpeciesPeople;
}

// all data for category 'vehicles'
export const vehiclesCategory = async function (category, input, isRandom) {
    let queryType = checkIfRandom(isRandom);
    console.log(queryType)
    const addingVehicle = await queryType(category, input);
    const addingVehiclePilots = await getPilots(addingVehicle);
    const addingVehicleFilms = await getFilms(addingVehiclePilots);

    return addingVehicleFilms;
}