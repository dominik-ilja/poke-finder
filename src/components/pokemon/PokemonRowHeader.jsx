import PokemonRowCell from "./PokemonRowCell";
import { v4 as uuid } from "uuid";

const cellClasses = "text-palette-white font-semibold bg-light-bg py-4";
const cellDarkClasses = "dark:text-dark-title dark:bg-dark-default"

export default function PokemonRowHeader(props) {
  const cells = props.cells.map(cell => {
    
    return <PokemonRowCell className={`${cellClasses} ${cellDarkClasses}`} key={uuid()}>{cell}</PokemonRowCell>
  })

  return <div className={props.className || ""}>{cells}</div>;
};
