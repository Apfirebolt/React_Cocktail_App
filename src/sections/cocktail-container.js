import React, { Component, Fragment } from 'react';
import CocktailList from '../components/cocktail-list';
import Footer from '../components/footer';
import Header from '../components/header';
import axios from 'axios';

class CocktailSection extends Component {
  constructor() {
    super();
    this.state = {
      notFound: false,
    }

    this.getCocktails = this.getCocktails.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  async getCocktails(searchText) {
    this.setState({
      cocktails: null
    })
    const cocktailData = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + searchText);
    this.setState({
      cocktails: cocktailData.data.drinks,
      notFound: cocktailData.data.drinks ? false : true
    })
  }

  clearSearch(searchText) {
    this.setState({
      cocktails: null
    })
  }

  render() {
    const { cocktails, notFound } = this.state;
    return (
      <Fragment>
        <Header getCocktails={this.getCocktails} clearSearch={this.clearSearch} />
        {cocktails &&
          <CocktailList cocktails={cocktails} />
        }
        {notFound &&
          <h3 className="text-center my-3 text-danger">
            No cocktails found with that name.
          </h3>
        }
        <Footer />
      </Fragment>
    );
  }
}


export default CocktailSection;