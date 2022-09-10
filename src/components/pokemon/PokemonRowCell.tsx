type Props = {
  className?: string;
  children?: React.ReactNode;
};

const PokemonRowCell = (props: Props) => {
  return (
    <div className={`${props.className || ""} flex items-center justify-center text-xs xs:text-sm sm:text-base`}>
      {props.children}
    </div>
  );
};

export default PokemonRowCell;
