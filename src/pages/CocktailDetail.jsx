import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useParams } from 'react-router-dom';
import axios from 'axios';


const CocktailDetail = () => {

  const { id } = useParams();

  const [cocktail, setCocktail] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const getCocktail = async () => {

    setIsLoading(true)
    const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
    setCocktail(cocktailData.data.drinks[0])
    setIsLoading(false)
  }

  const displayIngredients = () => {

    if(cocktail) {
      return (
          <p className="text-success my-2">
              { cocktail.strIngredient1 } , { cocktail.strIngredient2 }
          </p>
      )
    }
  }

  useEffect(() => {
    getCocktail()
  }, []);

  return (
    <div>
      {cocktail ?
        <div className="container my-2 text-center">
          <h3>
            {cocktail.strDrink} ( {cocktail.strAlcoholic} )
          </h3>
          <p>
            Category :- {cocktail.strCategory}
          </p>
          <p>
            Glass :- {cocktail.strGlass}
          </p>
          <img src={cocktail.strDrinkThumb} alt="Not available" height="400" width="450" className="rounded shadow" />
          <h4 className="my-2">
            Ingredients
          </h4>
          {displayIngredients()}
        </div>
      :
      <Loader />
      }
    </div>
  );
};

export default CocktailDetail;