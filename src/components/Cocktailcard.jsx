import React from "react";

function CocktailCard ({ name, image }) {

    return(
        <div className="cocktail-card">
                <img className="cocktail-image-large" src={image} alt={`${name} Glass`}/>
                <div className="cocktail-card-name">
                    <h3>{name}</h3>
                </div>
        </div>
    )
}

export default CocktailCard