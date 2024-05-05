import React, {useState, useEffect} from "react";
import CocktailCard from "./Cocktailcard";
import CocktailDetailModal from "./CocktailDetailModal";

function Cocktailcards( {numberOfCocktails } ){
    const [cocktails, setCocktails] = useState([]); //Stores fetched cocktails
    const [selectedCocktailId, setSelectedCocktailId] = useState(null); //UseState for cocktail modal functionality

    const handleCardClick = (cocktailId) => {
      setSelectedCocktailId(cocktailId)
    }

    const handleClose = () => {
      setSelectedCocktailId(null)
    }

    useEffect(() => {
      const fetchCocktails = async () => {
          try {
              const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}random-cocktails/${numberOfCocktails}`);
              const data = await response.json();
              setCocktails(data);
          } catch (error) {
              console.error("Error fetching random cocktail data:", error);
          }
      };
      
      fetchCocktails();
  }, [numberOfCocktails]);


  return (
    <div className="cocktail-container">
        {cocktails.map(cocktail => (
            <div onClick={() => handleCardClick(cocktail.idDrink)}>
                <CocktailCard
                    name={cocktail.strDrink}
                    image={cocktail.strDrinkThumb} />
            </div>
        ))}
        {selectedCocktailId && <CocktailDetailModal cocktailId={selectedCocktailId} onClose={handleClose} />}
    </div>
);
    
}

export default Cocktailcards;