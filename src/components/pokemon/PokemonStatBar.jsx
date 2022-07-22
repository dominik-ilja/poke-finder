function getBarWidth(stat) {
  const max = 255;
  return ((stat / max) * 100).toFixed(2) + '%';
}

export default function PokemonStatBar(props) {
  const width = getBarWidth(props.value)

  return (
    <div className={`bg-type-${props.type} ${props.className}`} style={{ width }}></div>
  );
};
