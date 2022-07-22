import { useEffect, useState } from "react";
import PokemonRow from "./PokemonRow";
import PokemonRowHeader from "./PokemonRowHeader";
import { v4 as uuid } from "uuid";
import extractPokemonData from "../../helpers/extractPokemonData"
import Spinner from "../ui/Spinner";

const headerCells = ["Dex", "Sprite", "Pokemon", "Type"];

export default function PokemonList(props) {
  const [filteredList, setFilteredList] = useState(props.data);

  useEffect(() => {

    function filterList() {
      const { data, typeFilter, searchFilter } = props;

      return data.filter(item => {
        const hasTerm = item.name.toLowerCase().includes(searchFilter);
        let hasType = false;

        if (typeFilter == null) {
          hasType = true;
        }
        else {
          hasType = item.types.some(({type}) => type.name === typeFilter)
        }
        
        return hasTerm && hasType;
      });
    }
    
    setFilteredList(filterList())
  }, [props])

  if (props.data == null) {
    return <Spinner />
  } 

  const rows = filteredList.map(item => {
    const { id, ...info } = extractPokemonData(item)
    const classes = "grid grid-cols-4 border-b-gray-100 dark:border-b-dark-default border-b-2 last:border-b-0"
    return <PokemonRow className={classes} id={id} info={info} key={uuid()} />
  })

  return (
    <div className="grid grid-cols-1">
      <PokemonRowHeader className="grid grid-cols-4" cells={headerCells} />
      {
        rows.length > 0 ?
          rows :
          <div className="col-span-full mt-4 font-semibold text-center">No Pokemon Found</div>
      }
    </div>
  );
};
