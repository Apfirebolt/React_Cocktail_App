import './styles.css';
import React, { Component, Fragment } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
    }

    this.getCockTailData = this.getCockTailData.bind(this);
    this.clearSearchInput = this.clearSearchInput.bind(this);
  }

  handleChange = (e) => {
    this.setState({ searchText: e.target.value });
  };

  getCockTailData() {
    const { searchText } = this.state;  
    this.props.getCocktails(searchText);  
  }

  clearSearchInput() {
    this.setState({
      searchText: '',
    })
    this.props.clearSearch();
  }

  render() {
    const { searchText } = this.state;  
    return (
      <Fragment>
       <div className="container my-3">
            <div className="form-group">
                <label htmlFor="search_by_name">Search Cocktail By Name</label>
                <input type="text" id="search_by_name" className="form-control" placeholder="Search by cock-tail name" onChange={this.handleChange} />
            </div>
            <button className="rounded shadow btn btn-secondary" onClick={() => {this.getCockTailData(searchText)}}>
                Search Cocktail
            </button>
            <button className="rounded shadow btn btn-warning ml-2" onClick={() => {this.clearSearchInput()}}>
                Clear
            </button>
        </div>
      </Fragment>
    );
  }
}

export default Header;
