

import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Pokemon from "./components/Pokemon";
import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";
function App() {
  return (
    <Routes>
      <Route path="/app/pokemon" element={<Pokemon />} />
      <Route path="/app/pokemon/:name" element={<PokemonDetails />} />
      <Route path="/app/" element={<Home />} />
      <Route path="/app/counter" element={<Counter />} />
    </Routes>
  );
}

export default App;