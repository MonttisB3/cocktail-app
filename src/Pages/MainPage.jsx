import React from "react";
import StartingInfo from "../components/StartingInfo";
import Cocktailcards from "../components/Cocktailcards";

function MainPage() {
  const startHeader = 'Definition of the word "Cocktail"'
  const startInfo = "A cocktail is an alcoholic mixed drink or non alcoholic mixed drink. Most commonly, a cocktail is a combination of one or more spirits mixed with other ingredients, such as juices, flavored syrups, tonic water, shrubs, and bitters. Cocktails vary widely across regions of the world, and many websites publish both original recipes and their own interpretations of older and more famous cocktails"

    return (
      <div>
        <StartingInfo infoHeader={startHeader} infoText={startInfo} />
        <Cocktailcards numberOfCocktails={8}/>
      </div>
    )
}   

export default MainPage;