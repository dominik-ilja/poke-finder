import PokemonRowCell from "./PokemonRowCell";
import { v4 as uuid } from "uuid";

type Props = {
  className?: string;
  cells: string[];
};

const PokemonRowHeader = (props: Props) => {
  const cells = props.cells.map(cell => (
    <PokemonRowCell className="py-4 font-semibold text-palette-white bg-light-bg dark:text-dark-title dark:bg-dark-default"
      key={uuid()}
    >
      {cell}
    </PokemonRowCell>
  ));

  return <div className={props.className || ""}>{cells}</div>;
};

export default PokemonRowHeader;
