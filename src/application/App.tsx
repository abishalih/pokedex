import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../infrastructure/template";
import PokemonDetails from "../presentation/pages/PokemonDetails";
import PokemonList from "../presentation/pages/PokemonList";

function App() {
  return (
    <BrowserRouter>
      <Template>
      <Routes>
        <Route path="/" element={ <PokemonList /> } />
        <Route path="/pokemon/:name" element={ <PokemonDetails /> } />
      </Routes>
      </Template>
    </BrowserRouter>
  );
}

export default App;
