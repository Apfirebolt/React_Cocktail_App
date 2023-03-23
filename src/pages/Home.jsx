import React, { useState } from "react";


const Home = () => {

    const getCocktails = async (searchText) => {
        const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchText);
        console.log(cocktailData)

        // cocktails: cocktailData.data.drinks,
        // notFound: cocktailData.data.drinks ? false : true
      }

    
      const getIngredients = async (searchText) => {
        const ingredientsData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
        console.log(cocktailData)
        // ingredients: ingredientsData.data.drinks,
      }

      const getCategories = async (searchText) => {
        const categoryData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        // categories: categoryData.data.drinks,
      }

      const getGlasses = async (searchText) => {
        const glassesData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list');
        // glasses: glassesData.data.drinks,
      }

  
  return (
    <div>
      <h1>
        Cocktail Homepage
      </h1>
      <button className="btn btn-primary">
        Hello
      </button>
    </div>
  );
};

export default Home;