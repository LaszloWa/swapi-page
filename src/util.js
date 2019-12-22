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