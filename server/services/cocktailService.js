const axios = require("axios");

const cocktailCache = []; //Stores our main cocktail list

const fetchCocktails = async (nameFilter = '') => {
    //Fetch cocktails into cache if cache is empty
   if (cocktailCache.length === 0) {
      try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
        cocktailCache.push(...response.data.drinks);
        console.log("Data fetched from the API into cache")
    } catch (error){
        console.error("Error fetching cocktail list from db", error)
        throw error
    }
   }
    //Apply filter if needed
   if (nameFilter) {
    console.log("Data fetched from cache and filtered for cocktail list");
    return cocktailCache.filter(cocktail =>
    cocktail.strDrink.toLowerCase().includes(nameFilter.toLowerCase()));
   }
   
   console.log("Data fetched from cache for cocktail list");
   return cocktailCache
}

//Fetch cocktail data based on it's id
const fetchCocktailDetails = async (id) => {
    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        return response.data.drinks[0];
    } catch (error) {
        console.error(`Error fetching details for cocktail id:${id}`, error);
        throw error
    }
}

const fetchRandomCoctails = async (amount) => {

    //Fetch the data from API and store it in the cache and then get random cocktails
    if (cocktailCache.length === 0) {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
            cocktailCache.push(...response.data.drinks);
            console.log("Data fetched from the API for random cocktails")
            return getRandomCocktails(amount)
        }catch (error){
            console.error("Error fetching cocktail list from db", error)
            throw error
        }
    }
    
    console.log("Data fetched from the cache for random cocktails")
    return getRandomCocktails(amount)
}

function getRandomCocktails(amount) {
    let shuffled =cocktailCache.slice()
    let i = cocktailCache.length;
    const min = i -amount;
    let temp, index

    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i]
        shuffled[i] = temp
    }
    return shuffled.slice(min)
}

module.exports = { fetchCocktails, fetchCocktailDetails, fetchRandomCoctails }