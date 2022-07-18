import { v4 as uuid } from "uuid";

export default function ListHeader(props) {
  const cells = props.cells.map(cell => {
    const key = uuid();
    return (
      <div
        key={key}
        className={`flex items-center justify-center text-white bg-dark `}
      >
        {cell}
      </div>
    );
  });

  return <div className={props.className}>{cells}</div>;
}
