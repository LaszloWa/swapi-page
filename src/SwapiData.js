import React from 'react';


const SwapData = 
    async function(category, userInput) {
        if (typeof userInput === 'string') {
            const respString = await fetch(`https://swapi.co/api/${category}/?search=${userInput}`);
            const data = await respString.json();
            console.log(data)
        } else if (typeof userInput === 'number') {
            const respNum = await fetch(`https://swapi.co/api/${category}/${userInput}`);
            const data = await respNum.json();
            console.log(data);
        } else {
            alert(`Sorry, ${userInput} is not an input we recognize.`)
        }   
    }

export default SwapData;