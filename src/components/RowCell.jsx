export default function RowCell(props) {
  return (
    <div
      className={`flex justify-center items-center border-b-2 border-dark bg-light ${props.className}`}
    >
      {props.children}
    </div>
  );
}
