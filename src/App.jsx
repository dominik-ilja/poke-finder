import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import NoMatch from "./pages/NoMatch";
import { Routes, Route } from "react-router-dom";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <div className="font-poppins bg- grid grid-rows-[auto_1fr_auto] h-screen">
      <Header />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokemon/:pokemonid" element={<Pokemon />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
