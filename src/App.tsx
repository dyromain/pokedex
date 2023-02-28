import { Routes, Route } from "react-router";
import Home from "./pages";
import Details from "./pages/pokemons/detail";
import Pokedex from "./pages/pokedex/index";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokemon/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
