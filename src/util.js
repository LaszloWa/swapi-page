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

// Trying to get information about residents on planets

export const testFunction = async function(category, userInput) {
    const planet = await SwapiDataNumber(category, userInput);
    
    const residentNames = await[];
    planet.residents.forEach(async function(resident) {
        const swapiResidentNumber = resident.match(/\d+/g)
        const getResidentName = await fetch(`https://swapi.co/api/people/${swapiResidentNumber}`);
        const response = await getResidentName.json()
        residentNames.push(response.name)
    })

    //planet.residents = residentNames;
    console.log('residentNames ', residentNames)
    
    return planet;
}