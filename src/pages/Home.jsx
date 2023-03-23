import React, { useState, useEffect } from "react";
import SearchCocktail from "../components/Search";
import CocktailList from "../components/CocktailList";
import Loader from "../components/Loader";
import axios from 'axios';


const Home = () => {

    const [cocktailData, setCocktailData] = useState([]);
    const [notFound, setNotFound] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ingredients, setIngredientsData] = useState([]);
    const [categories, setCategoryData] = useState([]);
    const [glasses, setGlassData] = useState([]);

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
                />
            }

            {cocktailData.length ?
                <CocktailList cocktails={cocktailData} />
                :
                <p className="text-center my-2">
                    No cocktail data available
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