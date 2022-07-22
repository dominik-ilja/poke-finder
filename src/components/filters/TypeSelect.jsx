import Type from "../ui/Type";

const classes = "hover:-translate-y-1 transition-transform"

export default function TypeSelect(props) {
  return (
    <button
      className={`${classes} ${props.className}`}
      onClick={() => props.onClick(props.value)}
    >
      <Type value={props.value} />
    </button>
  );
};
