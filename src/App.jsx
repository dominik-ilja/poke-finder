import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon";
import Pokedex from "./pages/Pokedex";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { getPokemonData } from "./api/api";
import NoMatch from "./pages/NoMatch";

const App = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    async function getData() {
      const result = await getPokemonData(133);
      setData(result)
    }
    getData()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 py-12 bg-fixed bg-center bg-no-repeat bg-light-bg-alt dark:bg-dark-bg-alt bg-clouds">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex data={data} />} />
          <Route path="/pokemon/:pokemonid" element={<Pokemon data={data} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
