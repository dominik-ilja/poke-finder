import { useEffect, useState } from "react";

import Container from "../components/ui/Container";
import PokemonList from "../components/pokemon/PokemonList";
import SearchFilter from "../components/filters/SearchFilter";
import TypeFilter from "../components/filters/TypeFilter";

export default function Pokedex(props) {
  
  const [typeFilter, setTypeFilter] = useState(null);
  const [searchFilter, setSearchFilter] = useState('');
  console.log(props);
  console.log("typeFilter: ", typeFilter);
  console.log("searchFilter: ", searchFilter);

  return (
    <Container>
      <SearchFilter onChange={term => setSearchFilter(term)} />
      <TypeFilter selection={typeFilter} onClick={type => setTypeFilter(type)} />
      <PokemonList data={props.data} typeFilter={typeFilter} searchFilter={searchFilter} />
    </Container>
  );
};
