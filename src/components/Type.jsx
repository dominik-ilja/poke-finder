export default function Type(props) {
  return (
    <div
      className={`bg-type-${props.type} text-white w-full max-w-[65px] rounded-md text-center capitalize`}
    >
      {props.type}
    </div>
  );
}
