import React, { useState } from "react";


const SearchCocktail = (props) => {

    
    const [searchText, setSearchText] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedGlass, setSelectedGlass] = useState('');
    const [selectedIngredient, setSelectedIngredient] = useState('');

    const setSelectedCategoryUtil = (value) => {
        console.log('Value ', value)
        setSelectedCategory(value)
    }

    const { glasses, categories, ingredients, getCocktails, clearSearch, filterByCategory, filterByGlass, filterByIngredient } = props;

    return (
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="form-group my-3">
                        <label htmlFor="search_by_name">Search Cocktail By Name</label>
                        <input type="text" id="search_by_name" className="form-control" 
                            placeholder="Search by cock-tail name"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <button className="rounded shadow btn btn-secondary mx-auto" onClick={() => { getCocktails(searchText) }}>
                        Search Cocktail By Name
                    </button>
                </div>
            </div>
            <div className="row">
            <div className="col-md-4">
                    <div className="form-group my-3">
                        <label htmlFor="search_by_category">Search Cocktail By Category</label>
                        <select id="search_by_category" className="form-control" onChange={(e) => setSelectedCategoryUtil(e.target.value)}>
                            {categories.map((item, index) => (
                                <option key={index} value={item.strCategory}>
                                    {item.strCategory}
                                </option>
                            ))}
                        </select>
                        <button className="rounded shadow btn btn-secondary my-3" onClick={() => { filterByCategory(selectedCategory) }}>
                            Search Cocktail By Category
                        </button>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="form-group my-3">
                        <label htmlFor="search_by_glasses">Search Cocktail By Glasses</label>
                        <select id="search_by_glasses" className="form-control" onChange={(e) => setSelectedGlass(e.target.value)}>
                            {glasses.map((item, index) => (
                                <option key={index} value={item.strGlass}>
                                    {item.strGlass}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="rounded shadow btn btn-secondary" onClick={() => { filterByGlass(selectedGlass) }}>
                        Search Cocktail By Glasses
                    </button>
                </div>
                <div className="col-md-4">
                    <div className="form-group my-3">
                        <label htmlFor="search_by_ingredients">Search Cocktail By Ingredients</label>
                        <select id="search_by_ingredients" className="form-control" onChange={(e) => setSelectedIngredient(e.target.value)}>
                            {ingredients.map((item, index) => (
                                <option key={index} value={item.strIngredient1}>
                                    {item.strIngredient1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="rounded shadow btn btn-secondary" onClick={() => { filterByIngredient(selectedIngredient) }}>
                        Search Cocktail By Ingredients
                    </button>
                    <button className="rounded shadow btn btn-warning mx-2" onClick={() => { clearSearch() }}>
                        Clear
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchCocktail;