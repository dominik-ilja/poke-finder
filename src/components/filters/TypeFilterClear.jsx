const classes = "border-2 capitalize hover:-translate-y-1 transition-all p-2 rounded-md text-palette-white";

const darkClasses = "";

export default function TypeFilterClear(props) {
  const dynamicClasses = `border-type-${props.type} bg-type-${props.type}`
  
  return (
    <button
      className={`${dynamicClasses} ${classes} ${darkClasses} ${props.className || ""}`}
      onClick={props.onClick}
    >
      {`Clear ${props.type} Filter`}
    </button>
  );
};
