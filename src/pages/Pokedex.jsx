import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

import Searchbar from "../components/Searchbar";
import TypeSelect from "../components/TypeSelect";
import ListRow from "../components/ListRow";
import ListHeader from "../components/ListHeader";
import Spinner from "../components/Spinner";

import { pokemonTypes } from "../services/pokemonInfo";
import { formatDex } from "../utilities/utilities";

const headerCells = ["Dex", "Sprite", "Pokemon", "Type"];

function extractTyping(types) {
  return types.map(type => type.type.name);
}
function extractPokemonData(item) {
  const dex = item.id;
  const id = formatDex(item.id);
  const name = item.name;
  const sprite = item.sprites.front_default;
  const type = extractTyping(item.types);
  // console.log(id);
  // console.log(type);

  return { dex, id, name, sprite, type };
}

export default function Pokedex(props) {
  const [list, setList] = useState([]);
  const [filterType, setFilterType] = useState(null);
  const [filteredList, setFilteredList] = useState(list);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getList = async () => {
      try {
        const BASE_URL = "https://pokeapi.co/api/v2/";
        // const res = await axios.get(BASE_URL + "pokemon?limit=905&offset=0");
        // const res = await axios.get(BASE_URL + "pokemon?limit=300&offset=0");
        const res = await axios.get(BASE_URL + "pokemon?limit=9&offset=0");

        const promises = res.data.results.map(pokemon =>
          axios.get(pokemon.url)
        );
        const responses = await Promise.all(promises);
        const data = responses.map(response => response.data);

        setList(data);
      } catch (error) {
        console.log(error);
      }
    };
    getList();
  }, []);
  useEffect(() => {
    function filterList(t = term) {
      return list.filter(item => {
        let hasType = false;

        if (filterType !== null) {
          for (let i = 0; i < item.types.length; i++) {
            const type = item.types[i].type.name;
            console.log(type === filterType);
            if (type === filterType) {
              hasType = true;
            }
          }
        } else {
          hasType = true;
        }

        return item.name.toLowerCase().includes(t) && hasType;
      });
    }
    setFilteredList(filterList());
  }, [filterType, term, list]);

  function handleChange(e) {
    const value = e.target.value.toLowerCase();
    console.log(value);

    setTerm(value);
  }
  function handleClick(e) {
    const { type } = e.target.dataset;
    // we could add a dataset prop to our buttons and target that rather than nodeName
    if (type !== undefined) {
      setFilterType(type);
      console.log(type);
    }
  }

  const mappedTypes = pokemonTypes.map(type => {
    const key = uuid();
    return <TypeSelect key={[key]} type={type} />;
  });
  const mappedList = filteredList.map(item => (
    <ListRow
      className="grid grid-cols-[69px,_45px,_125px,_65px] 2xs:grid-cols-4"
      key={uuid()}
      data={extractPokemonData(item)}
    />
  ));

  console.log(filteredList);

  return (
    <>
      {/* search filter */}
      <Searchbar className="mb-5" value={term} onChange={handleChange} />

      {/* type filter */}
      <div
        className="grid grid-cols-4 gap-y-2 justify-items-center mb-12"
        onClick={handleClick}
      >
        {mappedTypes}
        {filterType && (
          <div className="flex col-span-4 justify-center items-center mt-4">
            <button
              className="p-2 capitalize rounded-md border-2 transition-colors border-dark hover:bg-dark hover:text-white focus:bg-dark focus:text-white"
              onClick={() => setFilterType(null)}
            >
              {`Clear ${filterType} Filter`}
            </button>
          </div>
        )}
      </div>

      {/* pokemon list */}
      <div className="grid grid-cols-1 justify-items-center text-sm text-center 2xs:justify-items-stretch">
        <ListHeader
          className="grid grid-cols-[69px,_45px,_125px,_65px] 2xs:grid-cols-4 min-h-[50px]"
          cells={headerCells}
        />
        {mappedList}

        {list.length === 0 && <Spinner />}
      </div>
    </>
  );
}
