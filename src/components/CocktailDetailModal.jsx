import React, { useState, useEffect } from 'react';

function CocktailDetailModal({ cocktailId, onClose }) {
    const [cocktailDetails, setCocktailDetails] = useState(null); //Stores fetched cocktail details
    const [error, setError] = useState(null); //Stores the given error message so we can show it to the user

    useEffect(() => {
        if (!cocktailId) return;

        const fetchCocktailDetails = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/cocktails/${cocktailId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch cocktail details');
                }
                const data = await response.json();
                setCocktailDetails(data);
            } catch (error) {
                console.error("Error loading cocktail details", error);
                setError(error.message);
            }
        };

        fetchCocktailDetails();
    }, [cocktailId]);

    if (error) return <div>Error: {error}</div>;
    if (!cocktailDetails) return;

        
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="close-button">Close</button>
                <div className='modal-content'>
                    <h1 className='modal-drinkname'>{cocktailDetails.strDrink}</h1>
                    <div className='modal-img-info'>
                        <img className='modal-image' src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.strDrink} />
                        <div className='modal-info'>
                            <h3>Ingredients</h3>
                            <ul>
                                {Object.keys(cocktailDetails)
                                    .filter(key => key.startsWith('strIngredient') && cocktailDetails[key])
                                    .map(key => <li key={key}>{cocktailDetails[key]}</li>)}
                            </ul>
                            <h3>Glass</h3>
                            <p>{cocktailDetails.strGlass}</p>
                        </div>
                    </div>
                    <div className='modal-instructions'>
                        <h3>Instructions</h3>
                        <p>{cocktailDetails.strInstructions}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CocktailDetailModal;