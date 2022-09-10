import Type from "../ui/Type";

type Props = {
  className?: string;
  value: PokemonType;
  onClick: Function;
};

const TypeSelect = (props: Props) => {
  return (
    <button className={`hover:-translate-y-1 transition-transform ${props.className || ''}`}
      onClick={() => props.onClick(props.value)}
    >
      <Type value={props.value} />
    </button>
  );
};

export default TypeSelect;
