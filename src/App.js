import './App.css';
import CocktailSection from './sections/cocktail-container';
import CocktailDetailSection from './sections/cocktail-detail-container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={CocktailSection} />
          <Route path="/detail/:id" component={CocktailDetailSection} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
