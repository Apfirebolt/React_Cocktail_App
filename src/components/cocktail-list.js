import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function CocktailList(props) {
    const { cocktails } = props;
    return (
      <div className="container my-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Cocktail Name</th>
              <th scope="col">Alcoholic</th>
              <th scope="col">Category</th>
              <th scope="col">Ingredients</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {cocktails.map((item, index) => (
              <tr key={index}>
                <td>{ index }</td>
                <td>{ item.strDrink }</td>
                <td>{ item.strAlcoholic }</td>
                <td>{ item.strCategory }</td>
                <td>
                { item.strIngredient1 ? item.strIngredient1 : null },
                { item.strIngredient2 ? item.strIngredient2 : null },
                </td>
                <td>
                <Link to={`detail/${item.idDrink}`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default CocktailList;