import PokemonStatValue from "./PokemonStatValue";
import PokemonStatBar from "./PokemonStatBar";

const classes = "border-b-2 border-b-white last:border-b-0";
const darkClasses = "dark:border-b-dark-default";

export default function PokemonStatRow(props) {
  return (
    <>
      <PokemonStatValue className={`${classes} ${darkClasses}`} stat={props.stat} value={props.value} />
      <PokemonStatBar className={`${classes} ${darkClasses}`} type={props.type} value={props.value} />
    </>
  );
};
