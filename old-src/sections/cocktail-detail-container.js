import React, { Component, Fragment } from 'react';
import axios from 'axios';

class CocktailDetailSection extends Component {
  constructor() {
    super();
    this.state = {
      cocktail: null,
    }

    this.getCocktail = this.getCocktail.bind(this);
    this.displayIngredients = this.displayIngredients.bind(this);
  }

  componentDidMount() {
    this.getCocktail();
  }

  async getCocktail() {
    const { id } = this.props.match.params;  
    const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
    this.setState({
        cocktail: cocktailData.data.drinks[0]
    })
  }

  displayIngredients() {
      const { cocktail } = this.state;
      if(cocktail) {
        return (
            <p className="text-success my-2">
                { cocktail.strIngredient1 } , { cocktail.strIngredient2 }
            </p>
        )
      }
  }

  render() {
    const { cocktail } = this.state;
    if (!cocktail) {
        return (
            <p className="text-center text-success my-3">
                Loading...
            </p>
        )
    }
    return (
      <Fragment>
        {cocktail &&
            <div className="container my-2 text-center">
                <h3>
                    { cocktail.strDrink } ( { cocktail.strAlcoholic } )
                </h3>
                <p>
                    Category :- { cocktail.strCategory }
                </p>
                <p>
                    Glass :- { cocktail.strGlass }
                </p>
                <img src={cocktail.strDrinkThumb} alt="Not available" height="400" width="450" className="rounded shadow" />
                <h4 className="my-2">
                    Ingredients
                </h4>
                {this.displayIngredients()}
            </div>
        }
      </Fragment>
    );
  }
}


export default CocktailDetailSection;