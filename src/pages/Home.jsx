import React, { useState, useEffect } from "react";
import SearchCocktail from "../components/Search";
import CocktailList from "../components/CocktailList";
import FilteredCocktailList from "../components/FilteredCocktails";
import Loader from "../components/Loader";
import axios from 'axios';


const Home = () => {

    const [cocktailData, setCocktailData] = useState([]);
    const [notFound, setNotFound] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ingredients, setIngredientsData] = useState([]);
    const [categories, setCategoryData] = useState([]);
    const [glasses, setGlassData] = useState([]);
    const [filterResults, setFilteredResults] = useState(null);

    const getCocktails = async (searchText) => {
        setIsLoading(true)
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchText);

        setCocktailData(cocktailData.data.drinks)
        setNotFound(cocktailData.data.drinks ? false : true)
        setIsLoading(false)
    }

    const getApiData = async () => {
        setIsLoading(true)
        const ingredientsData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
        const categoryData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const glassesData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');

        setIngredientsData(ingredientsData.data.drinks)
        setCategoryData(categoryData.data.drinks)
        setGlassData(glassesData.data.drinks)

        setIsLoading(false)
    }

    const clearSearch = () => {
        setCocktailData([])
    }

    // Filters for cocktails
    const filterByCategory = async (categoryName) => {
        setIsLoading(true)
        const filteredData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=' + categoryName);
        setFilteredResults(filteredData.data.drinks)
        setIsLoading(false)
    }

    const filterByGlass = async (glassName) => {
        setIsLoading(true)
        const filteredData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=' + glassName);
        setFilteredResults(filteredData.data.drinks)
        setIsLoading(false)
    }

    console.log(filterResults)

    const filterByIngredient = async (ingredientName) => {
        setIsLoading(true)
        const filteredData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredientName);
        setFilteredResults(filteredData.data.drinks)
        setIsLoading(false)
    }

    useEffect(() => {
        getApiData()
    }, []);


    return (
        <div>
            <h3 className="text-center my-3">
                Cocktails
            </h3>
            {isLoading
                ? <Loader />
                : <SearchCocktail
                    categories={categories}
                    glasses={glasses}
                    ingredients={ingredients}
                    getCocktails={getCocktails}
                    clearSearch={clearSearch}
                    filterByCategory={filterByCategory}
                    filterByGlass={filterByGlass}
                    filterByIngredient={filterByIngredient}
                />
            }

            {cocktailData && cocktailData.length ?
                <CocktailList cocktails={cocktailData} />
                :
                <p className="text-center my-2">
                    No cocktail data available
                </p>
            }
            {filterResults && filterResults.length ?
                <FilteredCocktailList cocktails={filterResults} />
                :
                <p className="text-center my-2">
                    No filtered cocktails available
                </p>
            }
            {notFound &&
                <h3 className="text-center my-3 text-danger">
                    No cocktails found with that name.
                </h3>
            }
        </div>
    );
};

export default Home;