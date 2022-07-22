import { Link } from "react-router-dom";
import PokemonRowCell from "./PokemonRowCell";
import { v4 as uuid } from "uuid";

// we need to create a row to display : 
// - dex entry
// - Sprite
// - Pokemon Name
// - Type(s)

const classes = "bg-palette-white text-light-text max-h-20 capitalize"
const darkClasses = "dark:bg-dark-bg dark:text-dark-text"

export default function PokemonRow(props) {

  const type = props.info.type.map(type => {
    return <div key={uuid()} className={`bg-type-${type} flex items-center justify-center h-full text-palette-white`}>{type}</div>
  })

  return (
    <Link className={props.className} to={`/pokemon/${props.id}`}>
      <PokemonRowCell className={`${classes} ${darkClasses}`}>{props.info.dex}</PokemonRowCell>
      <PokemonRowCell className={`${classes} ${darkClasses}`}>
        <img className="h-full" src={props.info.sprite} alt="" />
      </PokemonRowCell>
      <PokemonRowCell className={`${classes} ${darkClasses}`}>{props.info.name}</PokemonRowCell>
      <PokemonRowCell className={`${classes} ${darkClasses} grid grid-cols-1`}>
        {type}
      </PokemonRowCell>
    </Link>
  );
};
