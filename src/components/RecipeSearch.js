import React, { useState } from 'react';

function RecipeSearch({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); //perform search operation (e.g call onSearch callback with query)
        onSearch(query);
    };

    return (
        <div>
            <h2>Recipe Search</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a recipe" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default RecipeSearch;