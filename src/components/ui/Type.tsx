type Props = {
  className?: string;
  value: PokemonType;
};

const Type = (props: Props) => {
  return (
    <div className={`bg-type-${props.value} capitalize w-full py-1 px-1 text-palette-white rounded-md text-center ${props.className || ''}`}>
      {props.value}
    </div>
  );
};

export default Type;
