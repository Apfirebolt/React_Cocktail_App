import React, { useState } from "react";


const SearchCocktail = (props) => {


    const [searchText, setSearchText] = useState('');
    const { glasses, categories, ingredients, getCocktails } = props;

    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group my-3">
                        <label htmlFor="search_by_name">Search Cocktail By Name</label>
                        <input type="text" id="search_by_name" className="form-control" 
                            placeholder="Search by cock-tail name"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <button className="rounded shadow btn btn-secondary" onClick={() => { getCocktails(searchText) }}>
                        Search Cocktail By Name
                    </button>
                </div>
                <div className="col-md-6">
                    <div className="form-group my-3">
                        <label htmlFor="search_by_category">Search Cocktail By Category</label>
                        <select id="search_by_category" className="form-control">
                            {categories.map((item, index) => (
                                <option key={index} value={item.strCategory}>
                                    {item.strCategory}
                                </option>
                            ))}
                        </select>
                        <button className="rounded shadow btn btn-secondary my-3">
                            Search Cocktail By Category
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group my-3">
                        <label htmlFor="search_by_glasses">Search Cocktail By Glasses</label>
                        <select id="search_by_glasses" className="form-control">
                            {glasses.map((item, index) => (
                                <option key={index} value={item.strGlass}>
                                    {item.strGlass}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="rounded shadow btn btn-secondary">
                        Search Cocktail By Glasses
                    </button>
                </div>
                <div className="col-md-6">
                    <div className="form-group my-3">
                        <label htmlFor="search_by_ingredients">Search Cocktail By Ingredients</label>
                        <select id="search_by_ingredients" className="form-control">
                            {ingredients.map((item, index) => (
                                <option key={index} value={item.strIngredient1}>
                                    {item.strIngredient1}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="rounded shadow btn btn-secondary">
                        Search Cocktail By Ingredients
                    </button>
                    <button className="rounded shadow btn btn-warning mx-2">
                        Clear Search Results
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchCocktail;