
import React from 'react';

const FilteredCocktailList = (props) => {
    const { cocktails } = props;
    return (
        <div className="container my-3">
            <h3 className="text-center my-3 text-success">
                Cocktail Names
            </h3>
            <div className="row">

                {cocktails.map((item, index) => (
                    <p key={index} className="bg-secondary col-2 text-center border mx-3 text-white shadow p-1 rounded">{item.strDrink}</p>
                ))}

            </div>
        </div>
    );
}

export default FilteredCocktailList;