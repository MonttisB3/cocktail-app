import React from "react";
import CocktailList from "../components/CocktailList";
import StartingInfo from "../components/StartingInfo";

function CocktailsPage() {
    const startHeader = 'Cocktail list'
    const startInfo = "Here you can browse trough all of our cocktails and search for specific ones using our state of the art search functions"

    return (
        <div>
            <StartingInfo  infoHeader={startHeader} infoText={startInfo}/>
            <CocktailList />
        </div>
    )
}

export default CocktailsPage;