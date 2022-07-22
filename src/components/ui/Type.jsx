const classes = "capitalize w-full py-1 px-1 text-palette-white rounded-md text-center"

export default function Type(props) {
  return (
    <div className={`bg-type-${props.value} ${classes} ${props.className}`}>
      {props.value}
    </div>
  );
}
