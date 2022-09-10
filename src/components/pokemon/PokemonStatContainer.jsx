import PokemonStatRow from "./PokemonStatRow";  
import formatStat from "../../helpers/formatStat";

export default function PokemonStatContainer(props) {

const statRows = props.stats.map(({stat, base_stat}) => {
  return <PokemonStatRow stat={formatStat(stat.name)} type={props.type} value={base_stat} />
})

  return (
    <div className="grid grid-cols-[auto_1fr]">
      {statRows}
    </div>
  );
};
