
import React from 'react';

const FilteredCocktailList = (props) => {
    const { cocktails } = props;
    console.log('Props are ', cocktails)
    return (
      <div className="container my-3">
        <h3 className="text-center my-3 text-success">
            Cocktail Names
        </h3>  
        {cocktails.map((item, index) => (
            <span key={index} className="badge badge-pill badge-secondary p-3 m-2">{ item.strDrink }</span> 
        ))}
      </div>
    );
  }
  
  export default FilteredCocktailList;