import React, {useState, useEffect} from "react";
import CocktailCard from "./Cocktailcard";
import CocktailFilter from "./CocktailFilter";
import CocktailDetailModal from "./CocktailDetailModal";

function CocktailList() {
    const [allDrinks, setAllDrinks] = useState([]); // Stores all fetched drinks
    const [visibleDrinks, setVisibleDrinks] = useState([]); // Stores drinks currently being displayed
    const [filter, setFilter] = useState("") //Stores the current user input
    const [loading, setLoading] = useState(false);
    const [selectedCocktailId, setSelectedCocktailId] = useState(null); //Stores the cocktail id of the clicked cocktail card
    const drinksPerPage = 10; // Number of drinks to display at a time

    const handleCardClick = (cocktailId) => {
      setSelectedCocktailId(cocktailId)
    }

    const handleClose = () => {
      setSelectedCocktailId(null)
    }
  
    useEffect(() => {
      loadAllDrinks();
    }, [filter]);
  
    const loadAllDrinks = async () => {
      if (loading) return;
      setLoading(true);
  
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}cocktails?name=${filter}`);
        const data = await response.json();
        setAllDrinks(data);
        setVisibleDrinks(data.slice(0, drinksPerPage));
      } catch (error) {
        console.error("Error loading drinks:", error);
      } finally {
        setLoading(false);
      }
    };
    
    //Show more functionality
    const showMoreDrinks = () => {
      const nextDrinks = allDrinks.slice(visibleDrinks.length, visibleDrinks.length + drinksPerPage);
      setVisibleDrinks(prevDrinks => [...prevDrinks, ...nextDrinks]);
    };
    
  
    return (

    <div className="drink-list-page">
      <CocktailFilter onFilterChange={setFilter} />
      <div className="drink-list-container">
      {visibleDrinks.length > 0 ? (
              visibleDrinks.map(cocktail => (
                <div onClick={() => handleCardClick(cocktail.idDrink)}>
                  <CocktailCard 
                    name={cocktail.strDrink}
                    image={cocktail.strDrinkThumb} />
                </div>
              ))
            ) : (
              <div className="no-results">
               <p> Unfortunately we couldn't find cocktail with that name :( </p>
               <p>Try to search for a different cocktail</p>
              </div>
            )}
            {selectedCocktailId && <CocktailDetailModal cocktailId={selectedCocktailId} onClose={handleClose} />}
          </div>

      {visibleDrinks.length < allDrinks.length && (
        <button onClick={showMoreDrinks} className="load-more-btn">  Show More </button>
      )}

    </div>
    )
}

export default CocktailList;