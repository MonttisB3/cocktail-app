import React, { useState } from "react";

function CocktailFilter ({ onFilterChange }) {
    const [filter, setFilter] = useState("")

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        onFilterChange(e.target.value);
    }

    return (
        <div className="cocktail-filter">
            <input type="text" placeholder="Search cocktails by name..." value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default CocktailFilter;