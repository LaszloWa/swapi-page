// Functions to fetch the user input, depending on random input ('Surprise me') or user input

export const SwapiDataString = async function(category, userInput) {
    try {
        if (category === '' || userInput === 0 || userInput === '') {
            return 'Missing input'
        } else {
            const respString = await fetch(`https://swapi.co/api/${category}/?search=${userInput}`);
            let data = await respString.json();
    
            return data.results;
        }
    } catch (e) {
        return 'Sorry, an unexpected error has occurred :('
    }
}

export const SwapiDataNumber= async function(category) {
    try{
        if (category === '') {
            return 'Please select a category.'
        } else {
            let randNum = 0;

            switch(category) {
                case 'people':
                    randNum = (Math.floor(Math.random() * 87) + 1);
                    break;
                case 'planets':
                    randNum = (Math.floor(Math.random() * 61) + 1);
                    break;
                case 'films':
                    randNum = (Math.floor(Math.random() * 7) + 1);
                    break;
                case 'species':
                    randNum = (Math.floor(Math.random() * 37) + 1);
                    break;
                case 'vehicles':
                    randNum = (Math.floor(Math.random() * 39) + 1);
                    break;
                case 'starships':
                    alert(`Sorry, but 'Surprise me' unfortunately doesn't work with Starships.`)
                    break;
                default:
                    alert('Sorry, something seems to have gone wrong, please try again.')
            }

            const response = await fetch(`https://swapi.co/api/${category}/${randNum}`);

            const data = await response.json();

            return data;
        }   
    } catch (e) {
        return 'Sorry, an unexpected error has occurred :('
    }
}

// Functions to get additional information on individual properties

// Getting people names

export const getPeople = async function(initialArray, category) {   
    
    // Different results have different keys for people. This sets the correct key so that the getPeople function can be used for multiple categories
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

        if (swapiPilotNumber[0] === '1') { // Workaround for a network error that only occurs with Luke
            return 'Luke Skywalker'
        } else {
            const response = await fetch(`https://swapi.co/api/people/${swapiPilotNumber}`);

            const data = await response.json();
            return data.name;
        } 
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
// These make sure that for selective results containing more than one returned object, the details are returned for the targeted object wihout deleting the remaining objects
const inputArrayFunction = function(array, index) {
    let inputArray = '';

    if (array instanceof Array) {
        inputArray = array[parseInt(index)];
    } else {
        inputArray = array;
    }

    return inputArray;
}

const outputArrayFunction = function(array, index, result) {
    let outputArray = array;

    if (array instanceof Array) {
        outputArray[parseInt(index)] = result;
    } else {
        outputArray = result;
    }

    return outputArray;
}

// all data for category 'people'
export const peopleCategory = async function (category, array, index) {
    const inputArray = inputArrayFunction(array, index);
    const addingPeopleHomeworld = await getHomeworld(inputArray, category);
    const addingPeopleFilms = await getFilms(addingPeopleHomeworld);
    const addingPeopleSpecies = await getSpecies(addingPeopleFilms);
    const addingPeopleVehicles = await getVehicles(addingPeopleSpecies);
    const addingPeopleStarships = await getStarships(addingPeopleVehicles);

    const outputArray = outputArrayFunction(array, index, addingPeopleStarships);

    return outputArray;
}

// all data for category 'planets'
export const planetCategory = async function (category, array, index) {
    const inputArray = inputArrayFunction(array, index);
    const addingPlanetResidents = await getPeople(inputArray, category);
    const addingPlanetFilms = await getFilms(addingPlanetResidents);

    const outputArray = outputArrayFunction(array, index, addingPlanetFilms);

    return outputArray;
}

// all data for category 'films'
export const filmCategory = async function (category, array, index) {
    const inputArray = inputArrayFunction(array, index);
    const addingFilmPeople = await getPeople(inputArray, category);
    const addingFilmPlanets = await getPlanets(addingFilmPeople);
    const addingFilmStarships = await getStarships(addingFilmPlanets);
    const addingFilmVehicles = await getVehicles(addingFilmStarships);
    const addingFilmSpecies = await getSpecies(addingFilmVehicles);
    
    const outputArray = outputArrayFunction(array, index, addingFilmSpecies);

    return outputArray;
}

// all data for category 'species'
export const speciesCategory = async function (category, array, index) {
    const inputArray = inputArrayFunction(array, index);
    const addingSpeciesFilms = await getFilms(inputArray, category);
    const addingSpeciesHomeworld = await getHomeworld(addingSpeciesFilms);
    const addingSpeciesPeople = await getPeople(addingSpeciesHomeworld, category);

    const outputArray = outputArrayFunction(array, index, addingSpeciesPeople);

    return outputArray;
}

// all data for category 'vehicles'
export const vehiclesCategory = async function (category, array, index) {
    const inputArray = inputArrayFunction(array, index);
    const addingVehiclePilots = await getPilots(inputArray);
    const addingVehicleFilms = await getFilms(addingVehiclePilots);

    const outputArray = outputArrayFunction(array, index, addingVehicleFilms);

    return outputArray;
}