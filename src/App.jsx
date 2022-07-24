import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"
import Pokemon from "./pages/Pokemon";
import Pokedex from "./pages/Pokedex";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import PageContainer from "./components/PageContainer";

import { getPokemonData } from "./api/api";
import NoMatch from "./pages/NoMatch";

const pageContainerClasses = "flex-1 py-12 bg-fixed bg-center bg-no-repeat bg-light-bg-alt dark:bg-dark-bg-alt bg-clouds";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await getPokemonData(5);
      setData(result)
    }
    getData()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageContainer className={pageContainerClasses}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex data={data} />} />
          <Route path="/pokemon/:pokemonid" element={<Pokemon data={data} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </PageContainer>
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;
