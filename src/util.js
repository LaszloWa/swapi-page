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