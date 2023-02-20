import {Routes, Route} from 'react-router';
import Home from './pages';
import Details from './pages/pokemons/detail'
import Pokedex from './pages/pokedex'
import "./App.css";
import "./home.module.scss"

function App() {

  return (
  
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Details />} />
      <Route path="/" element={<Pokedex />} />
    </Routes>
  </div>
    );
}

export default App;