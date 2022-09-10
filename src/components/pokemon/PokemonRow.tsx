import { Link } from "react-router-dom";
import PokemonRowCell from "./PokemonRowCell";
import { v4 as uuid } from "uuid";

type Props = {
  className?: string;
  id: number;
  info: {
    dex: string;
    name: string;
    sprite: string;
    type: string[];
  };
};

const PokemonRow = (props: Props) => {
  const { dex, name, sprite } = props.info;
  const img = <img className="h-full" src={sprite} alt="" />;
  const typing = props.info.type.map(type => (
    <div className={`bg-type-${type} flex items-center justify-center h-full text-palette-white`}
      key={uuid()}
    >
      {type}
    </div>
  ));
  const cells = [
    { content: dex, classes: null },
    { content: img, classes: null },
    { content: name, classes: null },
    { content: typing, classes: 'grid grid-cols-1' },
  ].map(cell => (
    <PokemonRowCell className={`${cell.classes || ''} bg-palette-white text-light-text max-h-20 capitalize dark:bg-dark-bg dark:text-dark-text`}
      key={uuid()}
    >
      {cell.content}
    </PokemonRowCell>
  ));

  return (
    <Link className={props.className} to={`/pokemon/${props.id}`}>
      {cells}
    </Link>
  );
};

export default PokemonRow;
