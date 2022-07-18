export default function TypeSelect(props) {
  const classes =
    "text-white w-[65px] 2xs:w-[75px] rounded-md text-center capitalize hover:-translate-y-1 focus:-translate-y-1 transition-transform text-sm 2xs:text-base";

  return (
    <button
      className={`${classes} bg-type-${props.type}`}
      data-type={props.type}
    >
      {props.type}
    </button>
  );
}
