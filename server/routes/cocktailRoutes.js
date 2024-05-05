const express = require("express");
const { fetchCocktails, fetchCocktailDetails, fetchRandomCoctails } = require("../services/cocktailService")
const { validateFilterInput, sanitizeFilterInput } = require("../services/validation")

const router = express.Router();

//Route for cocktail list fetch and filter
router.get("/cocktails", async (req, res) => {
    const rawName = req.query.name
    try {
        const sanitizedName = sanitizeFilterInput(rawName)
        const validatedName = validateFilterInput(sanitizedName)

        const cocktails = await fetchCocktails(validatedName)
        res.json(cocktails)
    } catch (error) {
        console.error("Error processing request: ", error.message);
        res.status(500).send("Internal Server Error");
    }
})

//Route for coctail detail fetch
router.get("/cocktails/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const cocktailDetails = await fetchCocktailDetails(id);
        res.json(cocktailDetails)
    } catch (error) {
        console.error("Failed to fetch cocktail details:", error.message);
        res.status(500).send("Internal Server Error")
    }
})

//Route for random coctails fetch
router.get("/random-cocktails/:amount", async (req, res) => {
    const { amount } = req.params;
    try {
        const randomCoctails = await fetchRandomCoctails(amount)
        res.json(randomCoctails)
    } catch (error) {
        console.error("Failed to fetch random cocktails:", error.message);
        res.status(500).send("Internal Server Error");
    }
})


module.exports = router