import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/Home";
import CocktailDetailScreen from "./pages/CocktailDetail";
import Footer from "./components/Footer";
import Header from "./components/Header";


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/cocktail-detail" element={<CocktailDetailScreen />} exact />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;